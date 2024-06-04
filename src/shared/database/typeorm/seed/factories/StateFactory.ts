import { v4 as uuidv4 } from 'uuid';
import { define } from 'typeorm-seeding';
import { faker } from '@faker-js/faker';
import State from '@modules/shared/state/infra/typeorm/entities/State';
import Country from '@modules/shared/country/infra/typeorm/entities/Country';
import shortState from '@shared/util/ShortState';
import AppDataSource from '@config/data-source';

let countries: Country[] = [];

AppDataSource.initialize().then(async () => {
  const countryRepository = AppDataSource.getRepository(Country);
  countries = await countryRepository.find();
  console.log('Countries loaded:', countries.length);
}).catch((err) => {
  console.error('Error during Data Source initialization', err);
});

define(State, () => {
  const state = new State();
  state.id = uuidv4();
  
  const country = faker.helpers.arrayElement(countries);
  
  state.country = country;
  state.short_name = faker.helpers.arrayElement(Object.values(shortState));
  state.long_name = faker.location.state();
  state.code = faker.word.words(1);
  state.created_at = new Date();
  state.updated_at = new Date();
  state.deleted_at = new Date();
  return state;
});
