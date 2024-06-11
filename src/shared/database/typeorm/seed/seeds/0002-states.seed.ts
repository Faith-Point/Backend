import { Seeder, Factory } from "typeorm-seeding";
import State from "@modules/shared/state/infra/typeorm/entities/State";
import Country from "@modules/shared/country/infra/typeorm/entities/Country";
import AppDataSource from "@config/data-source";
import log from "@shared/logger";
import createCountries from "@shared/database/typeorm/seed/seeds/0001-contries.seed";
import {
  initializeDataSource,
  destroyDataSource,
} from "@shared/util/data-source-manager";

export default class CreateStates implements Seeder {
  public async run(factory: Factory): Promise<any> {
    await initializeDataSource();
    const countryRepository = AppDataSource.getRepository(Country);
    let countries = await countryRepository.find();

    if (countries.length === 0) {
      await createCountries;
      countries = await countryRepository.find();
    }

    const stateRepository = AppDataSource.getRepository(State);
    const states = await stateRepository.find();

    if (states.length > 0) {
      log.warn("States already seeded.");
      await AppDataSource.destroy();
    } else {
      for (const country of countries) {
        await factory(State)({ country }).createMany(5);
      }
    }
    await destroyDataSource();
  }
}
