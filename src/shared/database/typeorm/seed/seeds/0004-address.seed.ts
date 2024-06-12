import { Seeder, Factory } from "typeorm-seeding";
import AppDataSource from "@config/data-source";
import log from "@shared/logger";
import City from "@modules/shared/city/infra/typeorm/entities/City";
import Address from "@modules/shared/address/infra/typeorm/entities/Address";
import createCities from "@shared/database/typeorm/seed/seeds/0003-city.seed";
import {
  initializeDataSource,
  destroyDataSource,
} from "@shared/util/data-source-manager";

export default class CreateAddressess implements Seeder {
  public async run(factory: Factory): Promise<any> {
    await initializeDataSource();
    const cityRepository = AppDataSource.getRepository(City);
    let cities = await cityRepository.find();

    if (cities.length === 0) {
      await createCities;
      cities = await cityRepository.find();
    }

    const addressRepository = AppDataSource.getRepository(Address);
    const addresses = await addressRepository.find();

    if (addresses.length > 0) {
      log.warn("Addresses already seeded.");
      await AppDataSource.destroy();
    } else {
      for (const city of cities) {
        await factory(Address)({ city }).createMany(5);
      }
    }
    await destroyDataSource();
  }
}
