import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import IAddressRepository from '@modules/shared/address/domain/repositories/IAddressRepository';
import IUpdateAddress from '@modules/shared/address/domain/interfaces/IUpdateAddress';

@injectable()
class UpdateCountryService {
  constructor(
    @inject('AddressRepository')
    private addressRepository: IAddressRepository
  ) {}

  public async update(id: string, paramters: IUpdateAddress): Promise<boolean> {
   if(!id) {
      throw new AppError('An ID must be provided for update operations.');
    }

    if(!paramters || (paramters.city === undefined && paramters.city === undefined)) {
      throw new AppError('No valid update data provided.');
    }

    const addressExists = await this.addressRepository.findById(id);
    if(!addressExists) {
      throw new AppError('Address does not exist.');
    }

    try {
      paramters.updated_at = new Date();
      const updateResult = await this.addressRepository.update(id, paramters);
      return updateResult;
    } catch(error) {
      throw new AppError(`Failed to update address:` + error);
    }
  }
}

export default UpdateCountryService;
