import { inject, injectable, container } from 'tsyringe';
import IUsersRepository from '@modules/user/domain/repositories/IUserRepository';
import authDictionary from '@shared/exceptions/dictionary/auth';
import IRequestLogin from '@shared/http/auth/request/IRequestLogin';
import Handler from '@shared/exceptions/Handler';
import http from '@config/http';
import SaveLogAuth from '@modules/logAuth/services/SaveLogAuthService';
import typeAuth from '@modules/logAuth/domain/interfaces/ITypeAuth';
import CleanDeep from '@shared/util/CleanDeep';
import ValidateCredential from '@modules/auth/services/ValidateCredentialService';
import UserCache from '@modules/auth/services/UserCacheService';
import AuthJwtService from './AuthJwtService';
import IAuthRepository from '../domain/repositories/IAuthRepository';
import logger from '@shared/logger';

@injectable()
class AuthLoginService {
  saveLogAuth: SaveLogAuth;

  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('AuthRepository')
    private authRepository: IAuthRepository,
  ) {
    this.saveLogAuth = container.resolve(SaveLogAuth);
  }

  public async execute({ email, password }: IRequestLogin): Promise<unknown> {
    logger.info('AuthLoginService.execute recieving:', email , password);
    const user = await this.usersRepository.findByEmail(email);
    logger.info('AuthLoginService.execute user is:', user);
    if (!user) {
      logger.info('AuthLoginService.execute user not found');
      throw new Handler(
        authDictionary.CREDENTIALS_INVALID.MESSAGE,
        authDictionary.CREDENTIALS_INVALID.CODE,
        http.UNAUTHORIZED,
      );
    }

    await ValidateCredential.execute(password, user.password);

    const auth = await new AuthJwtService().sign(user);

    const dataAuth = CleanDeep.execute(await this.authRepository.getAuthData(user));

    logger.info('AuthLoginService.execute dataAuth:', dataAuth);

    await UserCache.execute(auth.token, dataAuth);

    logger.info('AuthLoginService.execute userCache executed');

    const typeAuth = 'login' as unknown as typeAuth;
    await this.saveLogAuth.execute({ user, typeAuth });

    logger.info('AuthLoginService.execute saveLogAuth executed');

    return {
      dataAuth,
      auth,
    };
  }
}

export default AuthLoginService;
