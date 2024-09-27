import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import FaithPoint from '@modules/faithPoint/faith_point/infra/typeorm/entities/FaithPoint';
import FaithPointImage from '@modules/faithPoint/image/infra/typeorm/entities/FaithPointImage';
import log from '@shared/logger';
import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';

export default class CreateFaithPointImages implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const faithPointRepository = dataSource.getRepository(FaithPoint);
    const faithPoints = await faithPointRepository.find();

    const faithPointImageRepository = dataSource.getRepository(FaithPointImage);
    const faithPointImages = await faithPointImageRepository.find();

    if (faithPointImages.length > 0) {
      log.warn('FaithPointImages already seeded.');
    } else {
      const faithPointImageEntities = Array.from({ length: 5 }).map(() => {
        const faithPointImage = new FaithPointImage();
        faithPointImage.id = uuidv4();
        faithPointImage.url = faker.image.url();
        faithPointImage.faith_point = faithPoints[Math.floor(Math.random() * faithPoints.length)];
        return faithPointImage;
      });
      await faithPointImageRepository.save(faithPointImageEntities);
      log.info('FaithPointImages seeded.');
    }
  }
}
