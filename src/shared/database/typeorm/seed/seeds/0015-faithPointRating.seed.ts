import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import FaithPoint from '@modules/faithPoint/faith_point/infra/typeorm/entities/FaithPoint';
import FaithPointRating from '@modules/faithPoint/rating/infra/typeorm/entities/FaithPointRating';
import User from '@modules/user/infra/typeorm/entities/User';
import log from '@shared/logger';
import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';

export default class CreateFaithPointRatings implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const faithPointRepository = dataSource.getRepository(FaithPoint);
    const faithPoints = await faithPointRepository.find();

    if (faithPoints.length === 0) {
      log.warn('No FaithPoints found. Please seed FaithPoints first.');
      return;
    }

    const userRepository = dataSource.getRepository(User);
    const users = await userRepository.find();

    if (users.length === 0) {
      log.warn('No Users found. Please seed Users first.');
      return;
    }

    const faithPointRatingRepository = dataSource.getRepository(FaithPointRating);
    const faithPointRatings = await faithPointRatingRepository.find();

    if (faithPointRatings.length > 0) {
      log.warn('FaithPointRatings already seeded.');
    } else {
      const faithPointRatingEntities = Array.from({ length: 5 }).map(() => {
        const rating = new FaithPointRating();
        rating.id = uuidv4();
        rating.rating = faker.number.int({ min: 1, max: 10 });
        rating.comment = faker.lorem.sentence();
        rating.faithPoint = faithPoints[Math.floor(Math.random() * faithPoints.length)];
        rating.user = users[Math.floor(Math.random() * users.length)];
        return rating;
      });
      await faithPointRatingRepository.save(faithPointRatingEntities);
      log.info('FaithPointRatings seeded.');
    }
  }
}
