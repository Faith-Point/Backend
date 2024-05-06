import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import ICityRepository from '@modules/shared/city/domain/repositories/ICityRepository';
import IUpdateCity from '@modules/shared/country/domain/interfaces/IUpdateCountry';

@injectable()
class UpdateCountryService {
  constructor(
    @inject('CityRepository')
    private cityRepository: ICityRepository
  ) {}

  public async update(id: string, paramters: IUpdateCity): Promise<boolean> {
    if (!id) {
      throw new AppError('An ID must be provided for update operations.');
    }

    if (!paramters || (paramters.short_name === undefined && paramters.long_name === undefined && paramters.code === undefined)) {
      throw new AppError('No valid update data provided.');
    }

    const cityExists = await this.cityRepository.findById(id);
    if (!cityExists) {
      throw new AppError('City does not exist.');
    }

    try {
      paramters.updated_at = new Date();
      const updateResult = await this.cityRepository.update(id, paramters);
      return updateResult;
    } catch (error) {
      throw new AppError(`Failed to update city:` + error); 
    }
  }
}

export default UpdateCountryService;
