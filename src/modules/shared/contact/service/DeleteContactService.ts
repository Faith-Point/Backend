import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import IContactRepository from '@modules/shared/contact/domain/repositories/IContactRepository';

@injectable()
class DeleteContactService {
  constructor(
    @inject('ContactRepository')
    private contactRepository: IContactRepository,
  ) {}

  public async delete(id: string): Promise<void> {
    if(!id) {
      throw new AppError('An ID must be provided for delete operations.');
    }

    const contactExists = await this.contactRepository.findById(id);
    if(!contactExists) {
      throw new AppError('Contact does not exist.');
    }

    try {
      await this.contactRepository.delete(id);
    } catch(error) {
      throw new AppError(`Failed to delete contact:` + error);
    }
  }
}

export default DeleteContactService;