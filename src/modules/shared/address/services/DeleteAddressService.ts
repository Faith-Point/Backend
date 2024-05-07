/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import IAddressRepository from '@modules/shared/address/domain/repositories/IAddressRepository';

@injectable()
class DeleteAddressService {
	constructor(
		@inject('AddressRepository')
		private addressRepository: IAddressRepository,
	) {}

	public async delete(id: string): Promise<void> {
		if(!id) {
			throw new AppError('An ID must be provided for delete operations.');
		}

		const addressExists = await this.addressRepository.findById(id);
		if(!addressExists) {
			throw new AppError('Address does not exist.');
		}

		try {
			await this.addressRepository.delete(id);
		} catch(error) {
			throw new AppError(`Failed to delete address:` + error);
		}
	}
}

export default DeleteAddressService;
