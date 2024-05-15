import { v4 as uuid } from 'uuid';
import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import IRoleRepository from '@modules/role/domain/repositories/IRoleRepository';
import ICreateRole from '@modules/role/domain/interfaces/ICreateRole';
import IFindRole from '@modules/role/domain/interfaces/IFindRole';

@injectable()
class CreateRoleService {
    constructor(
        @inject('RoleRepository')
        private roleRepository: IRoleRepository,
    ){}

    public async create(parameters: ICreateRole): Promise<IFindRole> {
        if(!parameters.name) {
            throw new AppError('Missing required parameters: name');
        }
        const dateTimeNow = new Date();
        const newRole = await this.roleRepository.create({
            id: uuid(),
            name: parameters.name,
            created_at: dateTimeNow,
        });
        return newRole;
    }
}

export default CreateRoleService;