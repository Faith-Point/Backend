import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import IFaithPointImageRepository from '@modules/faithPoint/image/domain/repositories/IFaithPointImageRepository';

@injectable()
class DeleteFaithPointImageService {
    constructor(
        @inject('FaithPointImageRepository')
        private faithPointImageRepository: IFaithPointImageRepository,
    ){}

    public async delete(id: string): Promise<void> {
        if(!id) {
            throw new AppError('An ID must be provided for delete operations.');
        }

        const faithPointImageExists = await this.faithPointImageRepository.findById(id);
        if(!faithPointImageExists) {
            throw new AppError('FaithPointImage does not exist.');
        }

        try {
            await this.faithPointImageRepository.delete(id);
        } catch(error) {
            throw new AppError(`Failed to delete faithPointImage:` + error);
        }
    }
}

export default DeleteFaithPointImageService;