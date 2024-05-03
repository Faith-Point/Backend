import { v4 as uuidv4 } from 'uuid';
import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import ICountryRepository from '@modules/shared/country/domain/repositories/ICountryRepository';
import ICreateCountry from '@modules/shared/country/domain/interfaces/ICreateCountry';
import { IFindCountry } from '@modules/shared/country/domain/interfaces/IFindCountry';

@injectable()
class CreateCountryService {
  constructor(
    @inject('CountryRepository')
    private countryRepository: ICountryRepository,
  ) {}

  public async create(parameters: ICreateCountry): Promise<IFindCountry> {
    if (!parameters.short_name || !parameters.code) {
      throw new AppError('Missing required parameters: short_name or code');
    }

    const dateTimeNow = new Date();
    const codeExists = await this.countryRepository.findByCode(parameters.code);
    if (codeExists) {
      throw new AppError('Code already exists');
    }

    const shortNameExists = await this.countryRepository.findByShortName(parameters.short_name);
    if (shortNameExists) {
      throw new AppError('Short name already exists');
    }

    const newId = uuidv4();
    await this.countryRepository.create({
      id: newId,
      short_name: parameters.short_name,
      long_name: parameters.long_name,
      code: parameters.code,
      created_at: dateTimeNow,
      updated_at: dateTimeNow,  
    });

    const freshCountry = await this.countryRepository.findById(newId);
    if (!freshCountry) {
      throw new AppError('Failed to retrieve the newly created country.');
    }

    return {
      id: freshCountry.id,
      short_name: freshCountry.short_name,
      long_name: freshCountry.long_name,
      code: freshCountry.code,
    };
  }
}

export default CreateCountryService;
