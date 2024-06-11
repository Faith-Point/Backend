import { Seeder, Factory } from "typeorm-seeding";
import AppDataSource from "@config/data-source";
import log from "@shared/logger";
import Religion from "@modules/faithPoint/religions/infra/typeorm/entities/Religion";
import {
  initializeDataSource,
  destroyDataSource,
} from "@shared/util/data-source-manager";

export default class CreateReligions implements Seeder {
  public async run(factory: Factory): Promise<any> {
    await initializeDataSource();
    const religionRepository = AppDataSource.getRepository(Religion);
    const religions = await religionRepository.find();

    if (religions.length > 0) {
      log.warn("Religions already created.");      
    } else {
      await factory(Religion)().createMany(10);
    }
    await destroyDataSource();
  }
}
