import { container } from 'tsyringe';
import FaithPointScheduleRepository from '@modules/faithPoint/schedule/infra/typeorm/repositories/FaithPointScheduleRepository';
import IFaithPointScheduleRepository from '@modules/faithPoint/schedule/domain/repositories/IFaithPointScheduleRepository';

container.registerSingleton<IFaithPointScheduleRepository>('FaithPointScheduleRepository', FaithPointScheduleRepository);