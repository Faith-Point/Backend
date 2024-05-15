import IAuthRepository from '@modules/auth/domain/repositories/IAuthRepository';
import { injectable } from 'tsyringe';
import { Repository } from 'typeorm';
import AppDataSource from '@config/data-source';
import { IUser } from '@modules/user/domain/interfaces/IUser';
import User from '@modules/user/infra/typeorm/entities/User';

@injectable()
class AuthRepository implements IAuthRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(User);
  }

  public async getAuthData(user: IUser): Promise<unknown> {
    const userAuth = await this.ormRepository.findOne({
      where: { email: user.email },
    });

    return userAuth;
  }
}

export default AuthRepository;
