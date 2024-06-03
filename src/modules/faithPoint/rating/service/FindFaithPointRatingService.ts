import { inject, injectable } from 'tsyringe';
import IFaithPointRatingRepository from '@modules/faithPoint/rating/domain/repositories/IFaithPointRatingRepository';
import IFindFaithPointRating from '@modules/faithPoint/rating/domain/interfaces/IFindFaithPointRating';

@injectable()
class FindFaithPointRatingService {
    constructor(
        @inject('FaithPointRatingRepository')
        private faithPointRatingRepository: IFaithPointRatingRepository,
    ){}

    public async findAll(): Promise<IFindFaithPointRating[]> {
        const faithPointRatings = await this.faithPointRatingRepository.findAll();
        return faithPointRatings; 
    }

    public async findById(id: string): Promise<IFindFaithPointRating | undefined> {
        if (!id) {
            throw new Error('An ID must be provided to find a faith point rating.');
        }
        const faithPointRating = await this.faithPointRatingRepository.findById(id);
        return faithPointRating; 
    }

    public async findByFaithPoint(faithPoint: string): Promise<IFindFaithPointRating[]> {
        if (!faithPoint) {
            throw new Error('A faith point must be provided to find a faith point rating.');
        }
        const faithPointRatings = await this.faithPointRatingRepository.findByFaithPointId(faithPoint);
        return faithPointRatings || [];
    }

    public async findByUser(user: string): Promise<IFindFaithPointRating[]> {
        if (!user) {
            throw new Error('A user must be provided to find a faith point rating.');
        }
        const faithPointRatings = await this.faithPointRatingRepository.findByUserId(user);
        return faithPointRatings || [];
    }

    public async findByRating(rating: number): Promise<IFindFaithPointRating[]> {
        if (!rating) {
            throw new Error('A rating must be provided to find a faith point rating.');
        }
        const faithPointRatings = await this.faithPointRatingRepository.findByRating(rating);
        return faithPointRatings || [];
    }
}

export default FindFaithPointRatingService;