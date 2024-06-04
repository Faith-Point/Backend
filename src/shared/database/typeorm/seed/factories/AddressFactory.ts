import { v4 as uuidv4 } from 'uuid';
import { define } from 'typeorm-seeding';
import { faker } from '@faker-js/faker';
import Address from '@modules/shared/address/infra/typeorm/entities/Address';
import City from '@modules/shared/city/infra/typeorm/entities/City';
import AppDataSource from '@config/data-source';

let cities: City[] = [];

AppDataSource.initialize().then(async () => {
  const cityRepository = AppDataSource.getRepository(City);
  cities = await cityRepository.find();
  console.log('Cities loaded:', cities.length);
}).catch((err) => {
  console.error('Error during Data Source initialization', err);
});

define(Address, () => {
  const address = new Address();
  address.id = uuidv4();
  
  const city = faker.helpers.arrayElement(cities);
  
  address.city = city;
  address.street = faker.location.street();
  address.number = faker.location.buildingNumber();
  address.complement = faker.location.secondaryAddress();
  address.neighborhood = faker.location.county();
  address.created_at = new Date();
  address.updated_at = new Date();
  address.deleted_at = new Date();
  return address;
});