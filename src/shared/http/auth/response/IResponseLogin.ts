import { IUser } from '@modules/user/domain/interfaces/IUser';

interface IResponseLogin {
  user: IUser;
  token: string;
}

export default IResponseLogin;
