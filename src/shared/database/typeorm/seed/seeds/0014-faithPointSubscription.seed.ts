import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import FaithPoint from '@modules/faithPoint/faith_point/infra/typeorm/entities/FaithPoint';
import FaithPointSubscription from '@modules/faithPoint/subscription/infra/typeorm/entities/FaithPointSubscription';
import User from '@modules/user/infra/typeorm/entities/User';
import log from '@shared/logger';
import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';

export default class CreateFaithPointSubscription implements Seeder {
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

    const faithPointSubscriptionRepository = dataSource.getRepository(FaithPointSubscription);
    const faithPointSubscriptions = await faithPointSubscriptionRepository.find();

    if (faithPointSubscriptions.length > 0) {
      log.warn('FaithPointSubscriptions already seeded.');
    } else {
      const faithPointSubscriptionEntities = Array.from({ length: 5 }).map(() => {
        const subscription = new FaithPointSubscription();
        subscription.id = uuidv4();
        subscription.is_active = faker.datatype.boolean();
        subscription.faith_point = faithPoints[Math.floor(Math.random() * faithPoints.length)];
        subscription.user = users[Math.floor(Math.random() * users.length)];
        return subscription;
      });
      await faithPointSubscriptionRepository.save(faithPointSubscriptionEntities);
      log.info('FaithPointSubscriptions seeded.');
    }
  }
}
