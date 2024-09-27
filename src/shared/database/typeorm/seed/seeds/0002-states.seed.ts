import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import State from '@modules/shared/state/infra/typeorm/entities/State';
import Country from '@modules/shared/country/infra/typeorm/entities/Country';
import log from '@shared/logger';
import { v4 as uuidv4 } from 'uuid';
import shortState from '@shared/util/ShortState';
import CreateCountries from '@shared/database/typeorm/seed/seeds/0001-contries.seed';
import { faker } from '@faker-js/faker';

export default class CreateStates implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const countryRepository = dataSource.getRepository(Country);
    let countries = await countryRepository.find();

    if (countries.length === 0) {
      await new CreateCountries().run(dataSource);
      countries = await countryRepository.find();
    }

    const stateRepository = dataSource.getRepository(State);
    const states = await stateRepository.find();

    if (states.length > 0) {
      log.warn('States already seeded.');
    } else {
      const shortStates = Object.values(shortState);
      for (const country of countries) {
        const stateEntities = Array.from({ length: 5 }).map(() => {
          const state = new State();
          state.id = uuidv4();
          const randomIndex = Math.floor(Math.random() * shortStates.length);
          state.short_name = shortStates[randomIndex];
          state.long_name = faker.location.state();
          state.code = faker.location.state({ abbreviated: true });
          state.country = country;
          return state;
        });
        await stateRepository.save(stateEntities);
      }
      log.info('States seeded.');
    }
  }
}
