import { inject, injectable } from 'tsyringe';
import IContactRepository from '@modules/shared/contact/domain/repositories/IContactRepository';
import IFindContact from '@modules/shared/contact/domain/interfaces/IFindContact';

@injectable()
class FindContactService {
  constructor(
    @inject('ContactRepository')
    private contactRepository: IContactRepository,
  ) {}

  public async findAll(): Promise<IFindContact[] | undefined> {
    const contacts = await this.contactRepository.findAll();
    return contacts;
  }

  public async findById(id: string): Promise<IFindContact | undefined> {
    if(!id) {
      return undefined;
    }

    const contact = await this.contactRepository.findById(id);
    return contact;
  }

  public async findByName(name: string): Promise<IFindContact[] | undefined> {
    if(!name) {
      return undefined;
    }

    const contact = await this.contactRepository.findByName(name);
    return contact;
  }

  public async findByPhone(phone: string): Promise<IFindContact[] | undefined> {
    if(!phone) {
      return undefined;
    }

    const contact = await this.contactRepository.findByPhone(phone);
    return contact;
  }

  public async findByEmail(email: string): Promise<IFindContact[] | undefined> {
    if(!email) {
      return undefined;
    }

    const contact = await this.contactRepository.findByEmail(email);
    return contact;
  }
}

export default FindContactService;