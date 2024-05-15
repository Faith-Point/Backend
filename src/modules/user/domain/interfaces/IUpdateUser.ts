import { IRole } from '@modules/role/domain/interfaces/IRole'
import { IAddress } from '@modules/shared/address/domain/interfaces/IAddress'

interface IUpdateUser {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  role?: IRole;
  address?: IAddress;
  updated_at?: Date;
}

export default IUpdateUser;