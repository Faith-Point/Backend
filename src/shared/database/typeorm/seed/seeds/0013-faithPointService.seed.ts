import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import FaithPoint from '@modules/faithPoint/faith_point/infra/typeorm/entities/FaithPoint';
import FaithPointService from '@modules/faithPoint/service/infra/typeorm/entities/FaithPointService';
import log from '@shared/logger';
import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';

export default class CreateFaithPointServices implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const faithPointRepository = dataSource.getRepository(FaithPoint);
    const faithPoints = await faithPointRepository.find();

    if (faithPoints.length === 0) {
      log.warn('No FaithPoints found. Please seed FaithPoints first.');
      return;
    }

    const faithPointServiceRepository = dataSource.getRepository(FaithPointService);
    const faithPointServices = await faithPointServiceRepository.find();

    if (faithPointServices.length > 0) {
      log.warn('FaithPointServices already seeded.');
    } else {
      const faithPointServiceEntities = faithPoints.map(faithPoint => {
        const service = new FaithPointService();
        service.id = uuidv4();
        service.name = faker.lorem.word();
        service.description = faker.lorem.sentence();
        service.faith_point = faithPoint;
        return service;
      });
      await faithPointServiceRepository.save(faithPointServiceEntities);
      log.info('FaithPointServices seeded.');
    }
  }
}
