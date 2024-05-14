import ICreateRole from '@modules/role/domain/interfaces/ICreateRole';
import IFindRole from '@modules/role/domain/interfaces/IFindRole';
import IUpdateRole from '@modules/role/domain/interfaces/IUpdateRole';

interface IRoleRepository {
  create(data: ICreateRole): Promise<IFindRole>;
  update(id: string, role: IUpdateRole): Promise<boolean>;
  delete(id: string): Promise<void>;
  findAll(): Promise<IFindRole[]>;
  findById(id: string): Promise<IFindRole>;
  findByRole(role: string): Promise<IFindRole>;

}

export default IRoleRepository;