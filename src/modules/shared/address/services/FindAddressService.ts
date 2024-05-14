/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import IAddressRepository from '@modules/shared/address/domain/repositories/IAddressRepository';
import IFindAddress from '@modules/shared/address/domain/interfaces/IFindAddress';

@injectable()
class FindAddressService {

    constructor(
        @inject('AddressRepository')
        private addressRepository: IAddressRepository,
    ) {}

    public async findAll(): Promise<IFindAddress[]> {
        const addresses = await this.addressRepository.findAll();
        return addresses; 
    }

    public async findById(id: string): Promise<IFindAddress | undefined> {
        if (!id) {
            throw new Error('An ID must be provided to find an address.');
        }
        const address = await this.addressRepository.findById(id);
        return address; 
    }

    public async findByCity(code: string): Promise<IFindAddress[]> {
        if (!code) {
            throw new Error('A city must be provided to find an address.');
        }
        const addresses = await this.addressRepository.findByCity(code);
        return addresses || [];
    }
}

export default FindAddressService;
