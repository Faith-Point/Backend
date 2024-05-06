import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import ICityRepository from '@modules/shared/city/domain/repositories/ICityRepository';

@injectable()
class DeleteCityService {
	constructor(
		@inject('CityRepository')
		private cityRepository: ICityRepository,
	) {}

	public async delete(id: string): Promise<void> {
		if(!id) {
			throw new AppError('An ID must be provided for delete operations.');
		}

		const cityExists = await this.cityRepository.findById(id);
		if(!cityExists) {
			throw new AppError('City does not exist.');
		}

		try {
			await this.cityRepository.delete(id);
		} catch(error) {
			throw new AppError(`Failed to delete city:` + error);
		}
	}
}

export default DeleteCityService;
