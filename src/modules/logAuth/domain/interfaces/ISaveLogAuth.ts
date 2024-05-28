import ITypeAuth from '@modules/logAuth/domain/interfaces/ITypeAuth';
import { IUser } from '@modules/user/domain/interfaces/IUser';

interface ISaveLogAuth {
  id?: string;
  user: IUser;
  typeAuth: ITypeAuth;
  created_at?: Date;
}

export default ISaveLogAuth;
