import { v4 as uuidv4 } from 'uuid';
import { inject, injectable, container } from 'tsyringe';
import IUserRepository from '@modules/user/domain/repositories/IUserRepository';
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

@injectable()
class AuthLoginService {
  saveLogAuth: SaveLogAuth;

  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
    @inject('AuthRepository')
    private authRepository: IAuthRepository,
  ) {
    this.saveLogAuth = container.resolve(SaveLogAuth);
  }

  public async execute({ email, password }: IRequestLogin): Promise<unknown> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Handler(
        authDictionary.CREDENTIALS_INVALID.MESSAGE,
        authDictionary.CREDENTIALS_INVALID.CODE,
        http.UNAUTHORIZED,
      );
    }

    await ValidateCredential.execute(password, user.password);

    const auth = await new AuthJwtService().sign(user);

    const dataAuth = CleanDeep.execute(await this.authRepository.getAuthData(user));

    await UserCache.execute(auth.token, dataAuth);

    const typeAuth = 'login' as unknown as typeAuth;
    const dateTimeNow = new Date();
    await this.saveLogAuth.execute({ id:uuidv4() , user, typeAuth, created_at: dateTimeNow });

    return {
      dataAuth,
      auth,
    };
  }
}

export default AuthLoginService;
