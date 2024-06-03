import { container } from 'tsyringe';
import FaithPointServiceRepository from '@modules/faithPoint/service/infra/typeorm/repositories/FaithPointServiceRepository';
import IFaithPointServiceRepository from '@modules/faithPoint/service/domain/repositories/IFaithPointServiceRepository';

container.registerSingleton<IFaithPointServiceRepository>('FaithPointServiceRepository', FaithPointServiceRepository);