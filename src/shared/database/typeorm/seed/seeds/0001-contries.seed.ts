import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import Country from '../../../../../modules/shared/country/infra/typeorm/entities/Country';
import log from '@shared/logger';
import { v4 as uuidv4 } from 'uuid';
import shortCountry from '@shared/util/ShortCountry';
import { faker } from '@faker-js/faker';

export default class CreateCountries implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const countryRepository = dataSource.getRepository(Country);
    
    const countries = await countryRepository.find();

    if (countries.length > 0) {
      log.warn("Countries already seeded.");
    } else {
      const shortCountries = Object.values(shortCountry);
      const countryEntities = Array.from({ length: 10 }).map(() => {
        const country = new Country();
        country.id = uuidv4();
        const randomIndex = Math.floor(Math.random() * shortCountries.length);
        country.short_name = shortCountries[randomIndex];
        country.long_name = faker.location.country();
        country.code = faker.location.countryCode();
        return country;
      });

      await countryRepository.save(countryEntities);
      log.info("Countries seeded.");
    }
  }
}
