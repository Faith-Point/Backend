import { container } from 'tsyringe';
import AddressRepository from '@modules/shared/address/infra/typeorm/repositories/AddressRepository';
import IAddressRepository from '@modules/shared/address/domain/repositories/IAddressRepository';

container.registerSingleton<IAddressRepository>('AddressRepository', AddressRepository);