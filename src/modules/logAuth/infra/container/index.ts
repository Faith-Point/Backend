import { container } from 'tsyringe';
import ILogAuthRepository from '@modules/logAuth/domain/repositories/ILogAuthRepository';
import LogAuthRepository from '@modules/logAuth/infra/typeorm/repositories/LogAuthRepository';

container.registerSingleton<ILogAuthRepository>('LogAuthRepository',LogAuthRepository);