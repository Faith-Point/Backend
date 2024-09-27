import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import Religion from '@modules/faithPoint/religions/infra/typeorm/entities/Religion';
import log from '@shared/logger';
import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';

export default class CreateReligions implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const religionRepository = dataSource.getRepository(Religion);
    const religions = await religionRepository.find();

    if (religions.length > 0) {
      log.warn('Religions already created.');
    } else {
      const religionEntities = Array.from({ length: 10 }).map(() => {
        const religion = new Religion();
        religion.id = uuidv4();
        religion.name = faker.lorem.word();
        religion.description = faker.lorem.sentence();
        return religion;
      });
      await religionRepository.save(religionEntities);
      log.info('Religions seeded.');
    }
  }
}
