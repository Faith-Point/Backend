import ITypeAuth from '@modules/logAuth/domain/interfaces/ITypeAuth';
import { IUser } from '@modules/user/domain/interfaces/IUser';

interface ISaveLogAuth {
  user: IUser;
  typeAuth: ITypeAuth;
}

export default ISaveLogAuth;
