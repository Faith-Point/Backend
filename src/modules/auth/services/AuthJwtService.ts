import { sign } from 'jsonwebtoken';
import auth from '@config/auth';
import { IUser } from '@modules/user/domain/interfaces/IUser';
import IResponseLogin from '@shared/http/auth/response/IResponseLogin';
import logger from '@shared/logger';

class AuthJwtService {
  public async sign(user: IUser): Promise<IResponseLogin> {
    logger.info('AuthJwtService.sign recieving:', user);
    const payload = {
      id: user.id,
    };

    const accessToken = sign(payload, auth.jwt.secret as string,{
      expiresIn: auth.jwt.expiresIn,
    });

    logger.info('AuthJwtService.sign accessToken:', accessToken);
    return {
      user,
      token: accessToken,
    };
  }
}

export default AuthJwtService;
