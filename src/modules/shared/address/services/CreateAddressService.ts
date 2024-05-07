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
        console.log('Entrou aqui 1')
        if(!parameters.street || !parameters.number || !parameters.city) {
            throw new AppError('Missing required parameters: street, number or city');
        }
        console.log('Entrou aqui')

        const dateTimeNow = new Date();

        console.log('Entrou aqui 2')
        const newAddress = await this.addressRepository.create({
            id: uuidv4(),
            street: parameters.street,
            number: parameters.number,
            complement: parameters.complement,
            neighborhood: parameters.neighborhood,
            city: parameters.city,
            created_at: dateTimeNow,
        });
        console.log('Entrou aqui 3')

        return newAddress;
    }
}

export default CreateAddressService;