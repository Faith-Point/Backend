import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import ICountryRepository from '@modules/shared/country/domain/repositories/ICountryRepository';
import IupdateState from '@modules/shared/country/domain/interfaces/IUpdateCountry';


@injectable()
class UpdateCountryService {
  constructor(
    @inject('StateRepository')
    private stateRepository: ICountryRepository
  ) {}

  public async update(id: string, paramters: IupdateState): Promise<boolean> {
    if (!id) {
      throw new AppError('An ID must be provided for update operations.');
    }

    if (!paramters || (paramters.short_name === undefined && paramters.long_name === undefined && paramters.code === undefined)) {
      throw new AppError('No valid update data provided.');
    }

    const stateExists = await this.stateRepository.findById(id);
    if (!stateExists) {
      throw new AppError('State does not exist.');
    }

    try {
      paramters.updated_at = new Date();
      const updateResult = await this.stateRepository.update(id, paramters);
      return updateResult;
    } catch (error) {
      throw new AppError(`Failed to update state:` + error); 
    }
  }
}

export default UpdateCountryService;
