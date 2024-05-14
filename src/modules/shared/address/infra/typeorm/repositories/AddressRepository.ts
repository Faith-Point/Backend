import IAddressRepository from '@modules/shared/address/domain/repositories/IAddressRepository';
import { getRepository, Repository } from 'typeorm';
import Address from '@modules/shared/address/infra/typeorm/entities/Address';
import ICreateAddress from '@modules/shared/address/domain/interfaces/ICreateAddress';
import IUpdateAddress from '@modules/shared/address/domain/interfaces/IUpdateAddress';
import IFindAddress from '@modules/shared/address/domain/interfaces/IFindAddress';
import City from '@modules/shared/city/infra/typeorm/entities/City';

class AddressRepository implements IAddressRepository {
  private ormRepository: Repository<Address>;
  private ormRepositoryCity: Repository<City>;

  constructor() {
    this.ormRepository = getRepository(Address);
    this.ormRepositoryCity = getRepository(City);
  }

  public async create(parameters: ICreateAddress): Promise<IFindAddress> {
    try {
      const address = this.ormRepository.create(parameters);
      await this.ormRepository.save(address);
      return this.mapToIFindAddress(address);
    } catch (error) {
      console.error("Error creating address: ", error);
      throw error;
    }
  }
  public async update(id: string, address: IUpdateAddress): Promise<boolean> {
    await this.ormRepository.update(id, address);
    return true;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findAll(): Promise<IFindAddress[]> {
    const addresses = await this.ormRepository.find({
      relations: ['city', 'city.state', 'city.state.country']
    });
    return addresses.map(address => this.mapToIFindAddress(address));
  }

  public async findById(id: string): Promise<IFindAddress | undefined> {
    const address = await this.ormRepository.findOne({
      where: { id },
      relations: ['city', 'city.state', 'city.state.country']
    });
    return address ? this.mapToIFindAddress(address) : undefined;
  }

  public async findByCity(code: string): Promise<IFindAddress[]> {
    const findCity = await this.ormRepositoryCity.findOne({
      where: { code },
      relations: ['state', 'state.country']
    });
    if (!findCity) {
      return [];
    }
    const addresses = await this.ormRepository.find({
      where: { city: findCity },
      relations: ['city', 'city.state', 'city.state.country']
    });
    return addresses.map(address => this.mapToIFindAddress(address));
  }

  private mapToIFindAddress(address: Address): IFindAddress {
    return {
      id: address.id,
      street: address.street,
      number: address.number,
      complement: address.complement,
      neighborhood: address.neighborhood,
      city: address.city,
    };
  }
}

export default AddressRepository;
