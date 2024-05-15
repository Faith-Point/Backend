import { container } from 'tsyringe';
import UserRepository from '@modules/user/infra/typeorm/repositories/UserRepository';
import IUserRepository from '@modules/user/domain/repositories/IUserRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);