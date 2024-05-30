import { IAddress } from '@modules/shared/address/domain/interfaces/IAddress';
import { IReligion } from '@modules/faithPoint/religions/domain/interfaces/IReligion';
import { IContact } from '@modules/shared/contact/domain/interfaces/IContact';
import { ISocialMedia } from '@modules/shared/socialMedia/domain/interfaces/ISocialMedia';

interface IUpdateFaithPoint {
  id?: string;
  name?: string;
  description?: string;
  address?: IAddress;
  religion?: IReligion;
  contact?: IContact;
  socialMedia?: ISocialMedia;
  updated_at?: Date;
}

export default IUpdateFaithPoint;