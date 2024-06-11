import { Seeder, Factory, createConnection } from 'typeorm-seeding';
import State from '@modules/shared/state/infra/typeorm/entities/State';
import Country from '@modules/shared/country/infra/typeorm/entities/Country';
import AppDataSource from '@config/data-source';

export default class CreateStates implements Seeder {
    public async run(factory: Factory): Promise<any> {
        await AppDataSource.initialize();
        createConnection(AppDataSource.options);
        const countryRepository = AppDataSource.getRepository(Country);
        const countries = await countryRepository.find();

        if (countries.length === 0) {
            throw new Error('No countries found, please seed countries first.');
        }

        for (const country of countries) {
            await factory(State)({ country }).createMany(5);
        }
    }
}
