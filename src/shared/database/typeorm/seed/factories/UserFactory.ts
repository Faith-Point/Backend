import { v4 as uuidv4 } from 'uuid';
import { define } from 'typeorm-seeding';
import { faker } from '@faker-js/faker';
import User from '@modules/user/infra/typeorm/entities/User';
import Role from '@modules/role/infra/typeorm/entities/Role';
import Address from '@modules/shared/address/infra/typeorm/entities/Address';
import AppDataSource from '@config/data-source';

let roles: Role[] = [];

AppDataSource.initialize().then(async () => {
  const roleRepository = AppDataSource.getRepository(Role);
  roles = await roleRepository.find();
  console.log('Roles loaded:', roles.length);
}).catch((err) => {
  console.error('Error during Data Source initialization', err);
});

let addresses: Address[] = [];

AppDataSource.initialize().then(async () => {
  const addressRepository = AppDataSource.getRepository(Address);
  addresses = await addressRepository.find();
  console.log('Addresses loaded:', addresses.length);
}).catch((err) => {
  console.error('Error during Data Source initialization', err);
});

define(User, () => {
  const user = new User();
  user.id = uuidv4();
  
  const role = faker.helpers.arrayElement(roles);
  const address = faker.helpers.arrayElement(addresses);
  
  user.role = role;
  user.address = address;
  user.name = faker.person.fullName();
  user.email = faker.internet.email();
  user.password = faker.internet.password();
  user.created_at = new Date();
  user.updated_at = new Date();
  user.deleted_at = new Date();
  return user;
});