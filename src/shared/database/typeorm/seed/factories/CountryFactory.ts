import { v4 as uuidv4 } from 'uuid';
import { define } from 'typeorm-seeding';
import { faker } from '@faker-js/faker';
import Country from '@modules/shared/country/infra/typeorm/entities/Country';
import shortCountry from '@shared/util/ShortCountry';

define(Country, () => {
  const country = new Country();
  country.id = uuidv4();
  country.short_name = faker.helpers.arrayElement(Object.values(shortCountry));
  country.long_name = faker.location.country();
  country.code = faker.location.countryCode().slice(0, 2);
  country.created_at = new Date();
  country.updated_at = new Date();
  return country;
});
