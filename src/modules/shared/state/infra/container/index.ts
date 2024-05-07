import { container } from 'tsyringe';
import StateRepository from '@modules/shared/state/infra/typeorm/repositories/StateRepository';
import IStateRepository from '@modules/shared/state/domain/repositories/IStateRepository';

container.registerSingleton<IStateRepository>('StateRepository', StateRepository);