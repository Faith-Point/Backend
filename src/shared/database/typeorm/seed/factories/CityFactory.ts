import { v4 as uuidv4 } from 'uuid';
import { define } from 'typeorm-seeding';
import { faker } from '@faker-js/faker';
import City from '@modules/shared/city/infra/typeorm/entities/City';
import State from '@modules/shared/state/infra/typeorm/entities/State';
import AppDataSource from '@config/data-source';

let states: State[] = [];

AppDataSource.initialize().then(async () => {
  const stateRepository = AppDataSource.getRepository(State);
  states = await stateRepository.find();
  console.log('States loaded:', states.length);
}).catch((err) => {
  console.error('Error during Data Source initialization', err);
});

define(City, () => {
  const city = new City();
  city.id = uuidv4();
  
  const state = faker.helpers.arrayElement(states);
  
  city.state = state;
  city.long_name = faker.location.city();
  city.short_name = faker.helpers.slugify(city.long_name).slice(0, 2).toUpperCase();
  city.code = faker.helpers.slugify(city.long_name).slice(0, 2);
  city.created_at = new Date();
  city.updated_at = new Date();
  city.deleted_at = new Date();
  return city;
});