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

    public async findAll(): Promise<IFindAddress[] | undefined> {
        return this.addressRepository.findAll();
    }

    public async findById(id: string): Promise<IFindAddress | undefined> {
        if(!id) {
            throw new Error('An ID must be provided to find an address.');
        }
        return this.addressRepository.findById(id);
    }

    public async findByCity(code: string): Promise<IFindAddress[] | undefined> {
        if(!code) {
            throw new Error('A city must be provided to find an address.');
        }
        return this.addressRepository.findByCity(code);
    }
}

export default FindAddressService;