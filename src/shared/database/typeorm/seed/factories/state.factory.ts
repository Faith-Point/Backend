import { define } from 'typeorm-seeding';
import { v4 as uuidv4 } from 'uuid';
import State from '@modules/shared/state/infra/typeorm/entities/State';
import Country from '@modules/shared/country/infra/typeorm/entities/Country';
import shortState from '@shared/util/ShortState';
import { faker } from '@faker-js/faker';

define(State, (context?: { country: Country }) => {
  if (!context || !context.country) {
    throw new Error('Country context is required');
  }

  const state = new State();
  state.id = uuidv4();

  // Obter um elemento aleatório do enum shortState
  const shortStates = Object.values(shortState) as shortState[];
  const randomIndex = Math.floor(Math.random() * shortStates.length);
  state.short_name = shortStates[randomIndex];

  // Usando as funções corretas do módulo location
  state.long_name = faker.location.state();
  state.code = faker.location.state({ abbreviated: true });
  state.country = context.country;

  return state;
});
