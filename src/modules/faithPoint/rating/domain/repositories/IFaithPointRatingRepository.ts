import ICreateFaithPointRating from '@modules/faithPoint/rating/domain/interfaces/ICreateFaithPointRating';
import IFindFaithPointRating from '@modules/faithPoint/rating/domain/interfaces/IFindFaithPointRating';
import IUpdateFaithPointRating from '@modules/faithPoint/rating/domain/interfaces/IUpdateFaithPointRating';

interface IFaithPointRatingRepository {
    create(data: ICreateFaithPointRating): Promise<IFindFaithPointRating>;
    update(id: string, faithPointRating: IUpdateFaithPointRating): Promise<boolean>;
    delete(id: string): Promise<void>;
    findAll(): Promise<IFindFaithPointRating[]>;
    findById(id: string): Promise<IFindFaithPointRating | undefined>;
    findByFaithPointId(faithPointId: string): Promise<IFindFaithPointRating[] | undefined>;
    findByUserId(userId: string): Promise<IFindFaithPointRating[] | undefined>;
    findByRating(rating: number): Promise<IFindFaithPointRating[] | undefined>;
}

export default IFaithPointRatingRepository;