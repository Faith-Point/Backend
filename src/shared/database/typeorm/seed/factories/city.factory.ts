import { define } from 'typeorm-seeding';
import { v4 as uuidv4 } from 'uuid';
import State from '@modules/shared/state/infra/typeorm/entities/State';
import { Faker, faker } from '@faker-js/faker';
import City from '@modules/shared/city/infra/typeorm/entities/City';

define(City, (_fakes: typeof Faker, context?: { state: State }) => {
  if (!context || !context.state) {
    throw new Error('State context is required');
  }

  const city = new City();
  city.id = uuidv4();
  city.short_name = faker.location.city();
  city.long_name = faker.location.city();
  city.code = faker.location.zipCode();
  city.state = context.state;
  return city;
});