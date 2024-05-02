import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import ICountryRepository from '@modules/shared/country/domain/repositories/ICountryRepository';
import IUpdateCountry from '@modules/shared/country/domain/interfaces/IUpdateCountry';

@injectable()
class UpdateCountryService {
  constructor(
    @inject('CountryRepository')
    private countryRepository: ICountryRepository,
  ) {}

  public async update(id: string, countryData: IUpdateCountry): Promise<boolean> {
    if (!id) {
      throw new AppError('An ID must be provided for update operations.');
    }

    if (!countryData || (countryData.short_name === undefined && countryData.long_name === undefined && countryData.code === undefined)) {
      throw new AppError('No valid update data provided.');
    }

    const countryExists = await this.countryRepository.findById(id);
    if (!countryExists) {
      throw new AppError('Country does not exist.');
    }

    try {
      countryData.updated_at = new Date();
      const updateResult = await this.countryRepository.update(id, countryData);
      return updateResult;
    } catch (error) {
      throw new AppError(`Failed to update country:` + error);
    }
  }
}

export default UpdateCountryService;
