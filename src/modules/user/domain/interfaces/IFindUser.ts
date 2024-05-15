import { IRole } from '@modules/role/domain/interfaces/IRole'
import { IAddress } from '@modules/shared/address/domain/interfaces/IAddress'

interface IFindUser {
  id: string;
  name: string;
  email: string;
  role: IRole;
  address: IAddress;
}

export default IFindUser;