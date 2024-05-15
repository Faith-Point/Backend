import { IUser } from '@modules/user/domain/interfaces/IUser';

export interface IAuthCache {
  user: IUser;
  refreshToken: string;
  accessToken: string;
}

export default IAuthCache;
