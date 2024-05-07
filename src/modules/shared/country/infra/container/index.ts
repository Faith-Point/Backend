import { container } from 'tsyringe';
import CountryRepository from '@modules/shared/country/infra/typeorm/repositories/CountryRepository';
import ICountryRepository from '@modules/shared/country/domain/repositories/ICountryRepository';

container.registerSingleton<ICountryRepository>('CountryRepository', CountryRepository);