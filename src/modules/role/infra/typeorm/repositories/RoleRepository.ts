import IRoleRepository from '@modules/role/domain/repositories/IRoleRepository';
import Role from '@modules/role/infra/typeorm/entities/Role';
import ICreateRole from '@modules/role/domain/interfaces/ICreateRole';
import IFindRole from '@modules/role/domain/interfaces/IFindRole';
import IUpdateRole from '@modules/role/domain/interfaces/IUpdateRole';
import { injectable } from 'tsyringe';
import AppDataSource from '@config/data-source';
import { Repository } from 'typeorm';

@injectable()
class RoleRepository implements IRoleRepository {
  private ormRepository: Repository<Role>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Role);
  }

  public async create(parameters: ICreateRole): Promise<IFindRole> {
    try {
      const role = this.ormRepository.create(parameters);
      await this.ormRepository.save(role);
      return role;
    }
    catch (error) {
      console.error("Error creating role: ", error);
      throw error;
    }
  }

  public async update(id: string, data: IUpdateRole): Promise<boolean> {
    await this.ormRepository.update(id, data);
    return true;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findAll(): Promise<IFindRole[]> {
    const roles = await this.ormRepository.find();
    return roles;
  }

  public async findById(id: string): Promise<IFindRole> {
    const role = await this.ormRepository.findOne({
      where: { id }
    });
    
    return role as IFindRole;
  }

  public async findByRole(role: string): Promise<IFindRole> {
    const findRole = await this.ormRepository.findOne({
      where: { name: role}
    });

    return findRole as IFindRole;
  }
}

export default RoleRepository;