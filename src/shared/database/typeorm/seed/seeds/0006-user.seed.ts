import { Seeder, Factory } from "typeorm-seeding";
import AppDataSource from "@config/data-source";
import log from "@shared/logger";
import Role from "@modules/role/infra/typeorm/entities/Role";
import Address from "@modules/shared/address/infra/typeorm/entities/Address";
import User from "@modules/user/infra/typeorm/entities/User";
import CreateAddresses from "@shared/database/typeorm/seed/seeds/0004-address.seed";
import CreateRoles from "@shared/database/typeorm/seed/seeds/0005-role.seed";
import {
  initializeDataSource,
  destroyDataSource,
} from "@shared/util/data-source-manager";

function getRandomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default class CreateUsers implements Seeder {
  public async run(factory: Factory): Promise<any> {
    await initializeDataSource();

    const roleRepository = AppDataSource.getRepository(Role);
    let roles = await roleRepository.find();

    if (roles.length === 0) {
      await CreateRoles;
      roles = await roleRepository.find();
    }
    const randomRole = getRandomElement(roles);

    const addressRepository = AppDataSource.getRepository(Address);
    let addresses = await addressRepository.find();

    if (addresses.length === 0) {
      await CreateAddresses;
      addresses = await addressRepository.find();
    }
    const randomAddress = getRandomElement(addresses);

    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();

    if (users.length > 0) {
      log.warn("Users already seeded.");
    } else {
      for (let i = 0; i < roles.length; i++) {
        await factory(User)({ role: randomRole, address: randomAddress }).createMany(5);
      }
    }

    await destroyDataSource();
  }
}
