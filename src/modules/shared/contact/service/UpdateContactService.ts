import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import IContactRepository from '@modules/shared/contact/domain/repositories/IContactRepository';
import IUpdateContact from '@modules/shared/contact/domain/interfaces/IUpdateContact';

@injectable()
class UpdateContactService {
  constructor(
    @inject('ContactRepository')
    private contactRepository: IContactRepository,
  ) {}

  public async update(id: string, parameters: IUpdateContact): Promise<void> {
    if(!id) {
      throw new AppError('An ID must be provided for update operations.');
    }

    const contactExists = await this.contactRepository.findById(id);
    if(!contactExists) {
      throw new AppError('Contact does not exist.');
    }

    try {
      await this.contactRepository.update(id, parameters);
    } catch(error) {
      throw new AppError(`Failed to update contact:` + error);
    }
  }
}

export default UpdateContactService;