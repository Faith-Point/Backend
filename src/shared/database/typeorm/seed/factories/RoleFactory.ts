import { v4 as uuidv4 } from 'uuid';
import { define } from 'typeorm-seeding';
import { faker } from '@faker-js/faker';
import Role from '@modules/role/infra/typeorm/entities/Role';


define(Role, () => {
  const role = new Role();
  role.id = uuidv4();
  role.name = faker.word.words(1);
  role.created_at = new Date();
  role.updated_at = new Date();
  role.deleted_at = new Date();
  return role;
});