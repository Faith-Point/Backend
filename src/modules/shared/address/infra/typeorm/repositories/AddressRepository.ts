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

  public async findAll(): Promise<Address[]> {
    const address = this.ormRepository.find();
    return address;
  }

  public async findById(id: string): Promise<IFindAddress | undefined> {
    const address = this.ormRepository.findOne(id);
    return address;
  }

  public async findByCity(code: string): Promise<IFindAddress[] | undefined> {
    const findCity = await this.ormRepositoryCity.findOne({
      where: {
        id: code
      }
    });
    const address = this.ormRepository.find(
      {
        where: {
          city: findCity
        }
      }
    );

    return address;
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
