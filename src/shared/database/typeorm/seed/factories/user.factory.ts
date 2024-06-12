import { define } from 'typeorm-seeding';
import { v4 as uuidv4 } from 'uuid';
import { Faker, faker } from '@faker-js/faker';
import User from '@modules/user/infra/typeorm/entities/User';
import Role from '@modules/role/infra/typeorm/entities/Role';
import Address from '@modules/shared/address/infra/typeorm/entities/Address';

define(User, (_fakes: typeof Faker, context?: { role: Role, address: Address }) => {
  if (!context || !context.role || !context.address) {
    throw new Error('Role and Address are required to create a User');
  }

  const user = new User();
  user.id = uuidv4();
  user.role = context.role;
  user.address = context.address;
  user.name = faker.person.fullName();
  user.email = faker.internet.email();
  user.password = faker.internet.password();  
  return user;
});