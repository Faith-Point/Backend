import { IUser } from '@modules/user/domain/interfaces/IUser';

interface IAuthRepository {
  getAuthData(user: IUser): Promise<unknown>;
}

export default IAuthRepository;
