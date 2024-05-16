import { sign } from 'jsonwebtoken';
import auth from '@config/auth';
import { IUser } from '@modules/user/domain/interfaces/IUser';
import IResponseLogin from '@shared/http/auth/response/IResponseLogin';

class AuthJwtService {
  public async sign(user: IUser): Promise<IResponseLogin> {
    console.log('AuthJwtService.sign receiving:', user);

    const payload = {
      id: user.id,
    };

    // Verifique se a chave secreta está definida
    if (!auth.jwt.secret) {
      throw new Error('JWT secret is not defined in configuration');
    }

    console.log('AuthJwtService.sign using secret:', auth.jwt.secret);

    const accessToken = sign(payload, auth.jwt.secret as string, {
      expiresIn: auth.jwt.expiresIn,
    });

    console.log('AuthJwtService.sign accessToken:', accessToken);

    return {
      user,
      token: accessToken,
    };
  }
}

export default AuthJwtService;
