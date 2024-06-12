import { define } from 'typeorm-seeding';
import { v4 as uuidv4 } from 'uuid';
import State from '@modules/shared/state/infra/typeorm/entities/State';
import shortState from '@shared/util/ShortState';
import { Faker, faker } from '@faker-js/faker';
import Country from '@modules/shared/country/infra/typeorm/entities/Country';

define(State, (_fakes: typeof Faker, context?: { country: Country }) => {
  if (!context || !context.country) {
    throw new Error('Country context is required');
  }

  const state = new State();
  state.id = uuidv4();
  const shortStates = Object.values(shortState) as shortState[];
  const randomIndex = Math.floor(Math.random() * shortStates.length);
  state.short_name = shortStates[randomIndex];
  state.long_name = faker.location.state();
  state.code = faker.location.state({ abbreviated: true });
  state.country = context.country;
  return state;
});