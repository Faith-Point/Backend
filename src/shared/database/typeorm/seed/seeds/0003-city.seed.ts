import { Seeder, Factory } from "typeorm-seeding";
import State from "@modules/shared/state/infra/typeorm/entities/State";
import AppDataSource from "@config/data-source";
import log from "@shared/logger";
import City from "@modules/shared/city/infra/typeorm/entities/City";
import createStates from "@shared/database/typeorm/seed/seeds/0002-states.seed";
import {
  initializeDataSource,
  destroyDataSource,
} from "@shared/util/data-source-manager";

export default class CreateCities implements Seeder {
  public async run(factory: Factory): Promise<any> {
    await initializeDataSource();
    const stateRepository = AppDataSource.getRepository(State);
    let states = await stateRepository.find();

    if (states.length === 0) {
      await createStates;
      states = await stateRepository.find();
    }

    const cityRepository = AppDataSource.getRepository(City);
    const city = await cityRepository.find();

    if (city.length > 0) {
      log.warn("Cities already seeded.");
      await AppDataSource.destroy();
    } else {
      for (const state of states) {
        await factory(City)({ state }).createMany(5);
      }
    }
    await destroyDataSource();
  }
}
