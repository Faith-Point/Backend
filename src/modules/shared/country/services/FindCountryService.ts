import { injectable, inject } from 'tsyringe';
import ICountryRepository from '@modules/shared/country/domain/repositories/ICountryRepository';
import { IFindCountry } from '@modules/shared/country/domain/interfaces/IFindCountry';
import shortCountry from '@shared/util/ShortCountry';

@injectable()
class FindCountryService {
  constructor(
    @inject('CountryRepository')
    private countryRepository: ICountryRepository,
  ) {}

  public async findAll(): Promise<IFindCountry[]> {
    return this.countryRepository.findAll();
  }

  public async findById(id: string): Promise<IFindCountry | undefined> {
    if (!id) {
      throw new Error('An ID must be provided to find a country.');
    }
    return this.countryRepository.findById(id);
  }

  public async findByCode(code: string): Promise<IFindCountry | undefined> {
    if (!code) {
      throw new Error('A code must be provided to find a country.');
    }
    return this.countryRepository.findByCode(code);
  }

  public async findByShortName(shortName: shortCountry): Promise<IFindCountry | undefined> {
    if (!shortName) {
      throw new Error('A short name must be provided to find a country.');
    }
    return this.countryRepository.findByShortName(shortName);
  }

  public async findByLongName(longName: string): Promise<IFindCountry | undefined> {
    if (!longName) {
      throw new Error('A long name must be provided to find a country.');
    }
    return this.countryRepository.findByLongName(longName);
  }
}

export default FindCountryService;
