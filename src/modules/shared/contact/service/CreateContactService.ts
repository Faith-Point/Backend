import { v4 as uuidv4 } from 'uuid';
import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import IContactRepository from '@modules/shared/contact/domain/repositories/IContactRepository';
import ICreateContact from '@modules/shared/contact/domain/interfaces/ICreateContact';
import IFindContact from '@modules/shared/contact/domain/interfaces/IFindContact';

@injectable()
class CreateContactService {
    constructor(
        @inject('ContactRepository')
        private contactRepository: IContactRepository,
    ){}

    public async create(parameters: ICreateContact): Promise<IFindContact> {
        if(!parameters.name) {
            throw new AppError('Missing required parameter: name');
        }
        const dateTimeNow = new Date();
        const newContact = await this.contactRepository.create({
            id: uuidv4(),
            name: parameters.name,
            phone: parameters.phone,
            email: parameters.email,
            created_at: dateTimeNow,
        });
        return newContact;
    }
}

export default CreateContactService;