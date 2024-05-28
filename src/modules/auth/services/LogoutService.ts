import { v4 as uuidv4 } from 'uuid';
import SaveLogAuth from '@modules/logAuth/services/SaveLogAuthService';
import typeAuth from '@modules/logAuth/domain/interfaces/ITypeAuth';
import { injectable, container, inject } from 'tsyringe';
import IUserRepository from '@modules/user/domain/repositories/IUserRepository';
import authDictionary from '@shared/exceptions/dictionary/auth';
import http from '@config/http';
import Handler from '@shared/exceptions/Handler';
import CacheRedis from '@shared/cache/CacheRedis';

@injectable()
class LogoutService {
  saveLogAuth: SaveLogAuth;

  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {
    this.saveLogAuth = container.resolve(SaveLogAuth);
  }

  public async execute(email: string, token: string): Promise<void> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Handler(
        authDictionary.AUTHENTICATED_FAILED_REFRESH_TOKEN.MESSAGE,
        authDictionary.AUTHENTICATED_FAILED_REFRESH_TOKEN.CODE,
        http.BAD_REQUEST,
      );
    }

    await new CacheRedis().invalidate(token);

    const typeAuth = 'logout' as unknown as typeAuth;
    const dateTimeNow = new Date();
    await this.saveLogAuth.execute({ id:uuidv4() , user, typeAuth, created_at: dateTimeNow});
  }
}

export default LogoutService;
