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
    console.log('AuthLoginService.execute recieving:', email , password);
    const user = await this.userRepository.findByEmail(email);
    console.log('AuthLoginService.execute user is:', user);
    if (!user) {
      console.log('AuthLoginService.execute user not found');
      throw new Handler(
        authDictionary.CREDENTIALS_INVALID.MESSAGE,
        authDictionary.CREDENTIALS_INVALID.CODE,
        http.UNAUTHORIZED,
      );
    }

    await ValidateCredential.execute(password, user.password);

    const auth = await new AuthJwtService().sign(user);

    const dataAuth = CleanDeep.execute(await this.authRepository.getAuthData(user));

    console.log('AuthLoginService.execute dataAuth:', dataAuth);

    await UserCache.execute(auth.token, dataAuth);

    console.log('AuthLoginService.execute userCache executed');

    const typeAuth = 'login' as unknown as typeAuth;
    const dateTimeNow = new Date();
    await this.saveLogAuth.execute({ id:uuidv4() , user, typeAuth, created_at: dateTimeNow });

    console.log('AuthLoginService.execute saveLogAuth executed');

    return {
      dataAuth,
      auth,
    };
  }
}

export default AuthLoginService;
