import { sign } from 'jsonwebtoken';
import auth from '@config/auth';
import { IUser } from '@modules/user/domain/interfaces/IUser';
import IFindUserResponseLogin from '@modules/auth/domain/interfaces/IFindUserResponseLogin';

class AuthJwtService {
  public async sign(user: IUser): Promise<IFindUserResponseLogin> {
    const payload = {
      id: user.id,
    };

    const accessToken = sign(payload, auth.jwt.secret as string,{
      expiresIn: auth.jwt.expiresIn,
    });

    return {
      user,
      token: accessToken,
    };
  }
}

export default AuthJwtService;
