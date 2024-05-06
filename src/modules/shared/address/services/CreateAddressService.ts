import { v4 as uuidv4 } from 'uuid';
import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import IAddressRepository from '@modules/shared/address/domain/repositories/IAddressRepository';
import ICreateAddress from '@modules/shared/address/domain/interfaces/ICreateAddress';
import IFindAddress from '@modules/shared/address/domain/interfaces/IFindAddress';

@injectable()
class CreateAddressService {
    constructor(
        @inject('AddressRepository')
        private addressRepository: IAddressRepository,
    ){}

    public async create(parameters: ICreateAddress): Promise<IFindAddress> {
        if(!parameters.street || !parameters.number || !parameters.city) {
            throw new AppError('Missing required parameters: street, number or city');
        }

        const dateTimeNow = new Date();
        const newId = uuidv4();
        await this.addressRepository.create({
            id: newId,
            street: parameters.street,
            number: parameters.number,
            complement: parameters.complement,
            city: parameters.city,
            created_at: dateTimeNow,
            updated_at: dateTimeNow,
        });

        const freshAddress = await this.addressRepository.findById(newId);
        if(!freshAddress) {
            throw new AppError('Failed to retrieve the newly created address.');
        }

        return {
            id: freshAddress.id,
            street: freshAddress.street,
            number: freshAddress.number,
            complement: freshAddress.complement,
            city: freshAddress.city,
        };
    }
}

export default CreateAddressService;