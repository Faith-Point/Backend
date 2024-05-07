import { container } from 'tsyringe';
import CityRepository from '@modules/shared/city/infra/typeorm/repositories/CityRepository';
import ICityRepository from '@modules/shared/city/domain/repositories/ICityRepository';

container.registerSingleton<ICityRepository>('CityRepository', CityRepository);