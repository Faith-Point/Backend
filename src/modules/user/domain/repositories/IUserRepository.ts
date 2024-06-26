import ICreateUser from '@modules/user/domain/interfaces/ICreateUser';
import IUpdateUser from '@modules/user/domain/interfaces/IUpdateUser';
import IFindUser from '@modules/user/domain/interfaces/IFindUser';
import { IUser } from '@modules/user/domain/interfaces/IUser';

interface IUserRepository {
  create(data: ICreateUser): Promise<IFindUser>;
  update(id: string, user: IUpdateUser): Promise<boolean>;
  delete(id: string): Promise<void>;
  findAll(): Promise<IFindUser[]>;
  findById(id: string): Promise<IFindUser | undefined>;
  findByName(name: string): Promise<IFindUser[] | undefined>;
  findByEmail(email: string): Promise<IUser | undefined>;
  findByRole(role: string): Promise<IFindUser[] | undefined>;
}

export default IUserRepository;