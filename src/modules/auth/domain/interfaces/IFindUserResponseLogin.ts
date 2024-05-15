import { IUser } from '@modules/user/domain/interfaces/IUser';

interface IFindUserResponseLogin {
  user: IUser;
  token: string;
}

export default IFindUserResponseLogin;
