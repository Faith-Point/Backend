import { inject, injectable } from 'tsyringe';
import IRoleRepository from '@modules/role/domain/repositories/IRoleRepository';
import IFindRole from '@modules/role/domain/interfaces/IFindRole';

@injectable()
class FindRoleService {
  constructor(
    @inject('RoleRepository')
    private roleRepository: IRoleRepository,
  ) {}

  public async findAll(): Promise<IFindRole[]> {
    const roles = await this.roleRepository.findAll();
    return roles; 
  }

  public async findById(id: string): Promise<IFindRole | undefined> {
    if (!id) {
      throw new Error('An ID must be provided to find a role.');
    }
    const role = await this.roleRepository.findById(id);
    return role; 
  }

  public async findByRole(role: string): Promise<IFindRole | undefined> {
    if (!role) {
      throw new Error('A role must be provided to find a role.');
    }
    const findRole = await this.roleRepository.findByRole(role);
    return findRole;
  }

}

export default FindRoleService;