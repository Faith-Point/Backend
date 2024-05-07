import ICountryRepository from '@modules/shared/country/domain/repositories/ICountryRepository';
import shortCountry from '@shared/util/ShortCountry';
import { getRepository, Repository } from 'typeorm';
import Country from '@modules/shared/country/infra/typeorm/entities/Country';
import ICreateCountry from '@modules/shared/country/domain/interfaces/ICreateCountry';
import IUpdateCountry from '@modules/shared/country/domain/interfaces/IUpdateCountry';
import { IFindCountry } from '@modules/shared/country/domain/interfaces/IFindCountry';

class CountryRepository implements ICountryRepository {
  private ormRepository: Repository<Country>;

  constructor() {
    this.ormRepository = getRepository(Country);
  }

  public async create(parameters: ICreateCountry): Promise<IFindCountry> {
    try {
      const country = this.ormRepository.create(parameters);
      await this.ormRepository.save(country);
      return this.mapToIFindCountry(country);
    } catch (error) {
      console.error("Error creating country: ", error);
      throw error;
    }
  }
  public async update(id: string, country: IUpdateCountry): Promise<boolean> {
    await this.ormRepository.update(id, country);
    return true;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findAll(): Promise<IFindCountry[]> {
    const countries = await this.ormRepository.find();
    return countries.map(this.mapToIFindCountry);
  }

  public async findById(id: string): Promise<IFindCountry | undefined> {
    const country = await this.ormRepository.findOne(id);
    return country ? this.mapToIFindCountry(country) : undefined;
  }

  public async findByCode(code: string): Promise<IFindCountry | undefined> {
    const country = await this.ormRepository.findOne({ code });
    return country ? this.mapToIFindCountry(country) : undefined;
  }

  public async findByShortName(shortName: shortCountry): Promise<IFindCountry | undefined> {
    const country = await this.ormRepository.findOne({ short_name: shortName });
    return country ? this.mapToIFindCountry(country) : undefined;
  }
  
  public async findByLongName(longName: string): Promise<IFindCountry | undefined> {
    const country = await this.ormRepository.findOne({ long_name: longName });
    return country ? this.mapToIFindCountry(country) : undefined;
  }

  private mapToIFindCountry(country: Country): IFindCountry {
    return {
      id: country.id,
      short_name: country.short_name,
      long_name: country.long_name,
      code: country.code,
    };
  }
}

export default CountryRepository;