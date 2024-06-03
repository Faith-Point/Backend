import { v4 as uuidv4 } from 'uuid';
import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import IFaithPointRatingRepository from '@modules/faithPoint/rating/domain/repositories/IFaithPointRatingRepository';
import ICreateFaithPointRating from '@modules/faithPoint/rating/domain/interfaces/ICreateFaithPointRating';
import IFindFaithPointRating from '@modules/faithPoint/rating/domain/interfaces/IFindFaithPointRating';

@injectable()
class CreateFaithPointRatingService {
    constructor(
        @inject('FaithPointRatingRepository')
        private faithPointRatingRepository: IFaithPointRatingRepository,
    ){}

    public async create(parameters: ICreateFaithPointRating): Promise<IFindFaithPointRating> {
        if(!parameters.faithPoint || !parameters.user || !parameters.rating) {
            throw new AppError('Missing required parameters: faithPoint, user or rating');
        }
        const dateTimeNow = new Date();
        const newFaithPointRating = await this.faithPointRatingRepository.create({
            id: uuidv4(),
            faithPoint: parameters.faithPoint,
            user: parameters.user,
            rating: parameters.rating,
            comment: parameters.comment,
            created_at: dateTimeNow,
        });
        return newFaithPointRating;
    }
    
}

export default CreateFaithPointRatingService;