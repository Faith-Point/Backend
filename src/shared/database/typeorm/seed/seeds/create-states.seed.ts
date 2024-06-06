import { Seeder, Factory } from 'typeorm-seeding';
import State from '@modules/shared/state/infra/typeorm/entities/State';
import Country from '@modules/shared/country/infra/typeorm/entities/Country';
import AppDataSource from '@config/data-source';

export default class CreateStates implements Seeder {
    public async run(factory: Factory): Promise<any> {
        console.log('Calling AppDataSource Country');
        const countryRepository = AppDataSource.getRepository(Country);
        console.log('AppDataSource Country Called');
        const countries = await countryRepository.find();
        console.log('Countries found:', countries);

        if (countries.length === 0) {
            throw new Error('No countries found, please seed countries first.');
        }

        for (const country of countries) {
            await factory(State)({ country }).createMany(5);
        }
    }
}
