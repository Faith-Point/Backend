import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import IFaithPointServiceRepository from '@modules/faithPoint/service/domain/repositories/IFaithPointServiceRepository';

@injectable()
class DeleteFaithPointServiceService {
    constructor(
        @inject('FaithPointServiceRepository')
        private faithPointServiceRepository: IFaithPointServiceRepository,
    ){}

    public async delete(id: string): Promise<void> {
        if(!id) {
            throw new AppError('An ID must be provided for delete operations.');
        }

        const faithPointServiceExists = await this.faithPointServiceRepository.findById(id);
        if(!faithPointServiceExists) {
            throw new AppError('FaithPointService does not exist.');
        }

        try {
            await this.faithPointServiceRepository.delete(id);
        } catch(error) {
            throw new AppError(`Failed to delete faithPointService:` + error);
        }
    }
}

export default DeleteFaithPointServiceService;