import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import IFaithPointRatingRepository from '@modules/faithPoint/rating/domain/repositories/IFaithPointRatingRepository';
import IUpdateFaithPointRating from '@modules/faithPoint/rating/domain/interfaces/IUpdateFaithPointRating';

@injectable()
class UpdateFaithPointRatingService {
    constructor(
        @inject('FaithPointRatingRepository')
        private faithPointRatingRepository: IFaithPointRatingRepository,
    ){}

    public async update(id: string, parameters: IUpdateFaithPointRating): Promise<void> {
        if(!id) {
            throw new AppError('An ID must be provided for update operations.');
        }

        const faithPointRatingExists = await this.faithPointRatingRepository.findById(id);
        if(!faithPointRatingExists) {
            throw new AppError('Faith Point Rating does not exist.');
        }

        try {
            const dateTimeNow = new Date();
            parameters.updated_at = dateTimeNow;
            await this.faithPointRatingRepository.update(id, parameters);
        } catch(error) {
            throw new AppError(`Failed to update faith point rating:` + error);
        }
    }
}

export default UpdateFaithPointRatingService;