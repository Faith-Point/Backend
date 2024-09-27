import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import FaithPoint from '@modules/faithPoint/faith_point/infra/typeorm/entities/FaithPoint';
import Religion from '@modules/faithPoint/religions/infra/typeorm/entities/Religion';
import Address from '@modules/shared/address/infra/typeorm/entities/Address';
import Contact from '@modules/shared/contact/infra/typeorm/entities/Contact';
import SocialMedia from '@modules/shared/socialMedia/infra/typeorm/entities/SocialMedia';
import log from '@shared/logger';
import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';

function getRandomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default class CreateFaithPoints implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const religionRepository = dataSource.getRepository(Religion);
    const religions = await religionRepository.find();

    const addressRepository = dataSource.getRepository(Address);
    const addresses = await addressRepository.find();

    const contactRepository = dataSource.getRepository(Contact);
    const contacts = await contactRepository.find();

    const socialMediaRepository = dataSource.getRepository(SocialMedia);
    const socialMedias = await socialMediaRepository.find();

    const faithPointRepository = dataSource.getRepository(FaithPoint);
    const faithPoints = await faithPointRepository.find();

    if (faithPoints.length > 0) {
      log.warn('Faith Points already seeded.');
    } else {
      const faithPointEntities = Array.from({ length: 5 }).map(() => {
        const faithPoint = new FaithPoint();
        faithPoint.id = uuidv4();
        faithPoint.name = faker.lorem.word();
        faithPoint.description = faker.lorem.sentence();
        faithPoint.religion = getRandomElement(religions);
        faithPoint.address = getRandomElement(addresses);
        faithPoint.contact = getRandomElement(contacts);
        faithPoint.socialMedia = getRandomElement(socialMedias);
        return faithPoint;
      });
      await faithPointRepository.save(faithPointEntities);
      log.info('Faith Points seeded.');
    }
  }
}
