import { container } from 'tsyringe';
import FaithPointRepository from '@modules/faithPoint/faith_point/infra/typeorm/repositories/FaithPointRepository';
import IFaithPointRepository from '@modules/faithPoint/faith_point/domain/repositories/IFaithPointRepository';

container.registerSingleton<IFaithPointRepository>('FaithPointRepository', FaithPointRepository);