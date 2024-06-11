import { Seeder, Factory } from "typeorm-seeding";
import AppDataSource from "@config/data-source";
import log from "@shared/logger";
import Role from "@modules/role/infra/typeorm/entities/Role";
import {
  initializeDataSource,
  destroyDataSource,
} from "@shared/util/data-source-manager";


export default class CreateRoles implements Seeder {
  public async run(factory: Factory): Promise<any> {
    await initializeDataSource();
    const roleRepository = AppDataSource.getRepository(Role);
    const roles = await roleRepository.find();

    if (roles.length > 0) {
      log.warn("roles already seeded.");
    } else {
      await factory(Role)().createMany(10);
    }
    await destroyDataSource();
  }
}
