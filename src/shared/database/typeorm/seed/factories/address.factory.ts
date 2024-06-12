import { define } from 'typeorm-seeding';
import { v4 as uuidv4 } from 'uuid';
import { Faker, faker } from '@faker-js/faker';
import Address from '@modules/shared/address/infra/typeorm/entities/Address';
import City from '@modules/shared/city/infra/typeorm/entities/City';

define(Address, (_fakes: typeof Faker, context?: { city: City }) => {
  if (!context || !context.city) {
    throw new Error('city context is required');
  }

  const address = new Address();
  address.id = uuidv4();
  address.street = faker.location.streetAddress();
  address.number = faker.number.int({ min: 1, max: 9999 }).toString();
  address.complement = faker.word.words(3);
  address.neighborhood = faker.location.city();
  address.city = context.city;
  return address;
});