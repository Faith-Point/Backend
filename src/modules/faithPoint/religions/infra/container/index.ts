import { container } from 'tsyringe';
import ReligionRepository from '@modules/faithPoint/religions/infra/typeorm/repositories/ReligionRepository';
import IReligionRepository from '@modules/faithPoint/religions/domain/repositories/IReligionRepository';

container.registerSingleton<IReligionRepository>('ReligionRepository', ReligionRepository);