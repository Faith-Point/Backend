import { injectable } from 'tsyringe';
import IUserRepository from '@modules/user/domain/repositories/IUserRepository';
import Address from '@modules/shared/address/infra/typeorm/entities/Address';
import { Repository } from 'typeorm';
import User from '@modules/user/infra/typeorm/entities/User';
import ICreateUser from '@modules/user/domain/interfaces/ICreateUser';
import IUpdateUser from '@modules/user/domain/interfaces/IUpdateUser';
import IFindUser from '@modules/user/domain/interfaces/IFindUser';
import Role from '@modules/role/infra/typeorm/entities/Role';
import AppDataSource from '@config/data-source';
import { IUser } from '@modules/user/domain/interfaces/IUser';

@injectable()
class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;
  private ormRepositoryRole: Repository<Role>;
  private ormRepositoryAddress: Repository<Address>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(User);
    this.ormRepositoryRole = AppDataSource.getRepository(Role);
    this.ormRepositoryAddress = AppDataSource.getRepository(Address);
  }

  public async create(data: ICreateUser): Promise<User> {
    try {
      const user = this.ormRepository.create(data);

      if (data.role && data.role.id) {
        const role = await this.ormRepositoryRole.findOneBy({ id: data.role.id });
        if (role) {
          user.role = role;
        }
      }

      if (data.address && data.address.id) {
        const address = await this.ormRepositoryAddress.findOneBy({ id: data.address.id });
        if (address) {
          user.address = address;
        }
      }

      return await this.ormRepository.save(user);
    } catch (error) {
      console.error('Error creating user: ', error);
      throw error;
    }
  }

  public async update(id: string, user: IUpdateUser): Promise<boolean> {
    await this.ormRepository.update(id, user);

    return true;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.softDelete(id);
  }

  public async findAll(): Promise<User[]> {
    const users = await this.ormRepository.find({
      relations: ['role', 'address'],
    });

    return users;
  }

  public async findById(id: string): Promise<IFindUser | undefined> {
    const user = await this.ormRepository.findOne({
      where: { id },
      relations: ['role', 'address'],
    });
    return user ? user : undefined;
  }

  public async findByName(name: string): Promise<IFindUser[] | undefined> {
    const users = await this.ormRepository.find({
      where: { name },
      relations: ['role', 'address'],
    });

    return users ? users : undefined;
  }

  public async findByEmail(email: string): Promise<IUser | undefined> {
    const user = await this.ormRepository.findOne({
      where: { email },
      relations: ['role', 'address'],
    });

    return user ? user : undefined;
  }

  public async findByRole(role: string): Promise<IFindUser[] | undefined> {
    const findRole = await this.ormRepositoryRole.findOne({
      where: { name: role },
    });

    if (!findRole) {
      return undefined;
    }

    const users = await this.ormRepository.find({
      where: { role: findRole },
      relations: ['role', 'address'],
    });

    return users ? users : undefined;
  }
}

export default UserRepository;