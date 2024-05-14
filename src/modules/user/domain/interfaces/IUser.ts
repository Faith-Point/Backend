import { IRole } from '@modules/role/domain/interfaces/IRole'
import { IAddress } from '@modules/shared/address/domain/interfaces/IAddress'

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: IRole;
  address: IAddress;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
}