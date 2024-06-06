import { v4 as uuidv4 } from 'uuid';
import { define } from 'typeorm-seeding';
import Country from '@modules/shared/country/infra/typeorm/entities/Country';
import shortCountry from '@shared/util/ShortCountry';
import { faker } from '@faker-js/faker';

define(Country, () => {
    const country = new Country();
    country.id = uuidv4();

    const shortCountries = Object.values(shortCountry) as shortCountry[];
    const randomIndex = Math.floor(Math.random() * shortCountries.length);
    country.short_name = shortCountries[randomIndex];

    // Usando as funções corretas do módulo location
    country.long_name = faker.location.country();
    country.code = faker.location.countryCode();

    return country;
});
