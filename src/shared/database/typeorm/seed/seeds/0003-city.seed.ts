import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import City from '@modules/shared/city/infra/typeorm/entities/City';
import State from '@modules/shared/state/infra/typeorm/entities/State';
import log from '@shared/logger';
import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';
import CreateStates from '@shared/database/typeorm/seed/seeds/0002-states.seed';

export default class CreateCities implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const stateRepository = dataSource.getRepository(State);
    let states = await stateRepository.find();

    if (states.length === 0) {
      await new CreateStates().run(dataSource);
      states = await stateRepository.find();
    }

    const cityRepository = dataSource.getRepository(City);
    const cities = await cityRepository.find();

    if (cities.length > 0) {
      log.warn('Cities already seeded.');
    } else {
      for (const state of states) {
        const cityEntities = Array.from({ length: 5 }).map(() => {
          const city = new City();
          city.id = uuidv4();
          city.short_name = faker.location.city();
          city.long_name = faker.location.city();
          city.code = faker.location.zipCode();
          city.state = state;
          return city;
        });
        await cityRepository.save(cityEntities);
      }
      log.info('Cities seeded.');
    }
  }
}
