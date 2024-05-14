import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import IRoleRepository from '@modules/role/domain/repositories/IRoleRepository';

@injectable()
class DeleteRoleService {
  constructor(
    @inject('RoleRepository')
    private roleRepository: IRoleRepository,
  ) {}

  public async delete(id: string): Promise<void> {
    if(!id) {
      throw new AppError('An ID must be provided for delete operations.');
    }

    const roleExists = await this.roleRepository.findById(id);
    if(!roleExists) {
      throw new AppError('Role does not exist.');
    }

    try {
      await this.roleRepository.delete(id);
    } catch(error) {
      throw new AppError(`Failed to delete role:` + error);
    }
  }
}

export default DeleteRoleService;