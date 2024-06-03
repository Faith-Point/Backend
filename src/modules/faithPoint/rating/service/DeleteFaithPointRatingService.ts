import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import IFaithPointRatingRepository from '@modules/faithPoint/rating/domain/repositories/IFaithPointRatingRepository';

@injectable()
class DeleteFaithPointRatingService {
    constructor(
        @inject('FaithPointRatingRepository')
        private faithPointRatingRepository: IFaithPointRatingRepository,
    ) {}

    public async delete(id: string): Promise<void> {
        if(!id) {
            throw new AppError('An ID must be provided for delete operations.');
        }

        const faithPointRatingExists = await this.faithPointRatingRepository.findById(id);
        if(!faithPointRatingExists) {
            throw new AppError('Faith Point Rating does not exist.');
        }

        try {
            await this.faithPointRatingRepository.delete(id);
        } catch(error) {
            throw new AppError(`Failed to delete faith point rating:` + error);
        }
    }
}

export default DeleteFaithPointRatingService;