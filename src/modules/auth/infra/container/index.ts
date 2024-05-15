import { container } from 'tsyringe';
import AuthRepository from '@modules/auth/infra/typeorm/repositories/AuthRepository';
import IAuthRepository from '@modules/auth/domain/repositories/IAuthRepository';

container.registerSingleton<IAuthRepository>('AuthRepository', AuthRepository);
