import IContactRepository from '@modules/shared/contact/domain/repositories/IContactRepository';
import Contact from '@modules/shared/contact/infra/typeorm/entities/Contact';
import ICreateContact from '@modules/shared/contact/domain/interfaces/ICreateContact';
import IUpdateContact from '@modules/shared/contact/domain/interfaces/IUpdateContact';
import IFindContact from '@modules/shared/contact/domain/interfaces/IFindContact';
import { injectable } from 'tsyringe';
import AppDataSource from '@config/data-source';
import { Repository } from 'typeorm';

@injectable()
class ContactRepository implements IContactRepository {
  private ormRepository: Repository<Contact>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Contact);
  }

  public async create(parameters: ICreateContact): Promise<IFindContact> {
    try {
      const contact = this.ormRepository.create(parameters);
      await this.ormRepository.save(contact);
      return this.mapToIFindContact(contact);
    } catch (error) {
      console.error("Error creating contact: ", error);
      throw error;
    }
  }

  public async update(id: string, contact: IUpdateContact): Promise<boolean> {
    await this.ormRepository.update(id, contact);
    return true;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findAll(): Promise<IFindContact[]> {
    const contacts = await this.ormRepository.find();
    return contacts.map(contact => this.mapToIFindContact(contact));
  }

  public async findById(id: string): Promise<IFindContact | undefined> {
    const contact = await this.ormRepository.findOne({ where: { id } });
    return contact ? this.mapToIFindContact(contact) : undefined;
  }

  public async findByName(name: string): Promise<IFindContact[] | undefined> {
    const contacts = await this.ormRepository.find({ where: { name } });
    return contacts.map(contact => this.mapToIFindContact(contact));
  }

  public async findByPhone(phone: string): Promise<IFindContact[] | undefined> {
    const contacts = await this.ormRepository.find({ where: { phone } });
    return contacts.map(contact => this.mapToIFindContact(contact));
  }

  public async findByEmail(email: string): Promise<IFindContact[] | undefined> {
    const contacts = await this.ormRepository.find({ where: { email } });
    return contacts.map(contact => this.mapToIFindContact(contact));
  }

  private mapToIFindContact(contact: Contact): IFindContact {
    return {
      id: contact.id,
      name: contact.name,
      phone: contact.phone,
      email: contact.email,
    };
  }
}

export default ContactRepository;