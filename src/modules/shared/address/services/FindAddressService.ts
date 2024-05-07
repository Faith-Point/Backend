/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import IAddressRepository from '@modules/shared/address/domain/repositories/IAddressRepository';
import IFindAddress from '@modules/shared/address/domain/interfaces/IFindAddress';
import ICityRepository from '@modules/shared/city/domain/repositories/ICityRepository';
import { ICity } from '@modules/shared/city/domain/interfaces/ICity';

@injectable()
class FindAddressService {

    constructor(
        @inject('AddressRepository')
        private addressRepository: IAddressRepository,

        @inject('cityRepository')
        private cityRepository: ICityRepository,
    ) {}

    private async appendCityDetails(address: IFindAddress): Promise<IFindAddress> {
        if (address.city && address.city.id) {
            const city = await this.cityRepository.findById(address.city.id) as ICity;
            return { ...address, city };
        }
        return address;
    }
    public async findAll(): Promise<IFindAddress[] | undefined> {
        const addresses = await this.addressRepository.findAll();
        return Promise.all(addresses.map(address => this.appendCityDetails(address)));
    }

    public async findById(id: string): Promise<IFindAddress | undefined> {
        if(!id) {
            throw new Error('An ID must be provided to find an address.');
        }
        const address = await this.addressRepository.findById(id);
        return address ? this.appendCityDetails(address) : undefined;
    }

    public async findByCity(code: string): Promise<IFindAddress[] | undefined> {
        if(!code) {
            throw new Error('A city must be provided to find an address.');
        }
        const addresses = await this.addressRepository.findByCity(code);
        if(!addresses) {
            return [];
        }
        return Promise.all(addresses.map(address => this.appendCityDetails(address)));
    }
}

export default FindAddressService;