import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import ICountryRepository from '@modules/shared/country/domain/repositories/ICountryRepository';

@injectable()
class DeleteCountryService {
  constructor(
    @inject('CountryRepository')
    private countryRepository: ICountryRepository,
  ) {}

  public async delete(id: string): Promise<void> {
    if (!id) {
      throw new AppError('An ID must be provided for delete operations.');
    }

    const countryExists = await this.countryRepository.findById(id);
    if (!countryExists) {
      throw new AppError('Country does not exist.');
    }

    try {
      await this.countryRepository.delete(id);
    } catch (error) {
      throw new AppError(`Failed to delete country:` + error);
    }
  }
}

export default DeleteCountryService;
