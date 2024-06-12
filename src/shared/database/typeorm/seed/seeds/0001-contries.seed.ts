import { Seeder, Factory } from "typeorm-seeding";
import Country from "@modules/shared/country/infra/typeorm/entities/Country";
import AppDataSource from "@config/data-source";
import log from "@shared/logger";
import {
  initializeDataSource,
  destroyDataSource,
} from "@shared/util/data-source-manager";

export default class CreateCountries implements Seeder {
  public async run(factory: Factory): Promise<any> {
    await initializeDataSource();
    const countryRepository = AppDataSource.getRepository(Country);
    const countries = await countryRepository.find();

    if (countries.length > 0) {
      log.warn("Countries already seeded.");
    } else {
      await factory(Country)().createMany(10);
    }
    await destroyDataSource();
  }
}
