import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import Address from '@modules/shared/address/infra/typeorm/entities/Address';
import City from '@modules/shared/city/infra/typeorm/entities/City';
import log from '@shared/logger';
import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';
import CreateCities from '@shared/database/typeorm/seed/seeds/0003-city.seed';

export default class CreateAddresses implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const cityRepository = dataSource.getRepository(City);
    let cities = await cityRepository.find();

    if (cities.length === 0) {
      await new CreateCities().run(dataSource);
      cities = await cityRepository.find();
    }

    const addressRepository = dataSource.getRepository(Address);
    const addresses = await addressRepository.find();

    if (addresses.length > 0) {
      log.warn('Addresses already seeded.');
    } else {
      for (const city of cities) {
        const addressEntities = Array.from({ length: 5 }).map(() => {
          const address = new Address();
          address.id = uuidv4();
          address.street = faker.location.streetAddress();
          address.number = faker.number.int({ min: 1, max: 9999 }).toString();
          address.complement = faker.word.words(3);
          address.neighborhood = faker.location.city();
          address.city = city;
          return address;
        });
        await addressRepository.save(addressEntities);
      }
      log.info('Addresses seeded.');
    }
  }
}
