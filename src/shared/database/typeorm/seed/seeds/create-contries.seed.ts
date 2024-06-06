import { Seeder, Factory } from 'typeorm-seeding';
import Country from '@modules/shared/country/infra/typeorm/entities/Country';

export default class CreateCountries implements Seeder {
  public async run(factory: Factory): Promise<any> {
    await factory(Country)().createMany(10);
  }
}
