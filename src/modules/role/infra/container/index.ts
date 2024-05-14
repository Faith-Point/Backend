import { container } from 'tsyringe';
import RoleRepository from '@modules/role/infra/typeorm/repositories/RoleRepository';
import IRoleRepository from '@modules/role/domain/repositories/IRoleRepository';

container.registerSingleton<IRoleRepository>('RoleRepository', RoleRepository);