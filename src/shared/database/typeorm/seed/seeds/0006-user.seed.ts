import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import User from '@modules/user/infra/typeorm/entities/User';
import Role from '@modules/role/infra/typeorm/entities/Role';
import Address from '@modules/shared/address/infra/typeorm/entities/Address';
import log from '@shared/logger';
import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';
import CreateRoles from '@shared/database/typeorm/seed/seeds/0005-role.seed';
import CreateAddresses from '@shared/database/typeorm/seed/seeds/0004-address.seed';

export default class CreateUsers implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const roleRepository = dataSource.getRepository(Role);
    let roles = await roleRepository.find();

    if (roles.length === 0) {
      await new CreateRoles().run(dataSource);
      roles = await roleRepository.find();
    }

    const addressRepository = dataSource.getRepository(Address);
    let addresses = await addressRepository.find();

    if (addresses.length === 0) {
      await new CreateAddresses().run(dataSource);
      addresses = await addressRepository.find();
    }

    const userRepository = dataSource.getRepository(User);
    const users = await userRepository.find();

    if (users.length > 0) {
      log.warn('Users already seeded.');
    } else {
      const userEntities = Array.from({ length: 10 }).map(() => {
        const user = new User();
        user.id = uuidv4();
        user.name = faker.person.fullName();
        user.email = faker.internet.email();
        user.password = faker.internet.password();
        user.role = roles[Math.floor(Math.random() * roles.length)];
        user.address = addresses[Math.floor(Math.random() * addresses.length)];
        return user;
      });
      await userRepository.save(userEntities);
      log.info('Users seeded.');
    }
  }
}
