import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import Role from '@modules/role/infra/typeorm/entities/Role';
import log from '@shared/logger';
import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';

export default class CreateRoles implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const roleRepository = dataSource.getRepository(Role);
    const roles = await roleRepository.find();

    if (roles.length > 0) {
      log.warn('Roles already seeded.');
    } else {
      const roleEntities = Array.from({ length: 10 }).map(() => {
        const role = new Role();
        role.id = uuidv4();
        role.name = faker.hacker.verb();
        return role;
      });
      await roleRepository.save(roleEntities);
      log.info('Roles seeded.');
    }
  }
}
