import ICreateContact from '@modules/shared/contact/domain/interfaces/ICreateContact';
import IFindContact from '@modules/shared/contact/domain/interfaces/IFindContact';
import IUpdateContact from '@modules/shared/contact/domain/interfaces/IUpdateContact';

interface IContactRepository {
  create(data: ICreateContact): Promise<IFindContact>;
  update(id: string, contact: IUpdateContact): Promise<boolean>;
  delete(id: string): Promise<void>;
  findAll(): Promise<IFindContact[]>;
  findById(id: string): Promise<IFindContact | undefined>;
  findByName(name: string): Promise<IFindContact[] | undefined>;
  findByPhone(phone: string): Promise<IFindContact[] | undefined>;
  findByEmail(email: string): Promise<IFindContact[] | undefined>;
}

export default IContactRepository;