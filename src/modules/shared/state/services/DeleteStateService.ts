/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import IStateRepository from '@modules/shared/state/domain/repositories/IStateRepository';

@injectable()
class DeleteStateService {
	constructor(
		@inject('StateRepository')
		private stateRepository: IStateRepository,
	) {}

	public async delete(id: string): Promise<void> {
		if(!id) {
			throw new AppError('An ID must be provided for delete operations.');
		}

		const stateExists = await this.stateRepository.findById(id);
		if(!stateExists) {
			throw new AppError('State does not exist.');
		}

		try {
			await this.stateRepository.delete(id);
		} catch(error) {
			throw new AppError(`Failed to delete state:` + error);
		}
	}
}

export default DeleteStateService;
