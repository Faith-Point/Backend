import { container } from 'tsyringe';
import FaithPointImageRepository from '@modules/faithPoint/image/infra/typeorm/repositories/FaithPointImageRepository';
import IFaithPointImageRepository from '@modules/faithPoint/image/domain/repositories/IFaithPointImageRepository';

container.registerSingleton<IFaithPointImageRepository>('FaithPointImageRepository', FaithPointImageRepository);