import { container } from 'tsyringe';
import ILogExceptionRepository from '../../domain/repositories/ILogExceptionRepository';
import LogExceptionRepository from '../typeorm/repositories/LogExceptionRepository';

container.registerSingleton<ILogExceptionRepository>('LogExceptionRepository', LogExceptionRepository);