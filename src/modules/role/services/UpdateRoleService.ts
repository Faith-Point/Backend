import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import IRoleRepository from '@modules/role/domain/repositories/IRoleRepository';
import IUpdateRole from '@modules/role/domain/interfaces/IUpdateRole';

@injectable()
class UpdateRoleService {
  constructor(
    @inject('RoleRepository')
    private roleRepository: IRoleRepository,
  ) {}

  public async update(id: string, role: IUpdateRole): Promise<void> {

    if(!id) {
      throw new AppError('An ID must be provided for update operations.');
    }

    if(!role || (role.name === undefined)) {
      throw new AppError('No valid update data provided.');
    }

    const roleExists = await this.roleRepository.findById(id);
    if(!roleExists) {
      throw new AppError('Role does not exist.');
    }

    try {
      await this.roleRepository.update(id, role);
    } catch(error) {
      throw new AppError(`Failed to update role:` + error);
    }
  }
}

export default UpdateRoleService;