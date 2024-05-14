import ICountryRepository from '@modules/shared/country/domain/repositories/ICountryRepository';
import shortCountry from '@shared/util/ShortCountry';
import { Repository, getRepository } from 'typeorm';
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
    const country = await this.ormRepository.findOne({
      where: { id }
    });
    return country ? this.mapToIFindCountry(country) : undefined;
  }

  public async findCode(code: string): Promise<IFindCountry | undefined> {
    const country = await this.ormRepository.findOne({
      where: { code }
    });
    return country ? this.mapToIFindCountry(country) : undefined;
  }

  public async findShortName(shortName: shortCountry): Promise<IFindCountry | undefined> {
    const country = await this.ormRepository.findOne({
      where: { short_name: shortName }
    });
    return country ? this.mapToIFindCountry(country) : undefined;
  }
  
  public async findLongName(longName: string): Promise<IFindCountry | undefined> {
    const country = await this.ormRepository.findOne({
      where: { long_name: longName }
    });
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