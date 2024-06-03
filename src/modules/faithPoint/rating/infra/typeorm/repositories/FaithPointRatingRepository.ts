import { injectable } from 'tsyringe';
import AppDataSource from '@config/data-source';
import { Repository } from 'typeorm';
import IFaithPointRatingRepository from '@modules/faithPoint/rating/domain/repositories/IFaithPointRatingRepository';
import ICreateFaithPointRating from '@modules/faithPoint/rating/domain/interfaces/ICreateFaithPointRating';
import IFindFaithPointRating from '@modules/faithPoint/rating/domain/interfaces/IFindFaithPointRating';
import IUpdateFaithPointRating from '@modules/faithPoint/rating/domain/interfaces/IUpdateFaithPointRating';
import FaithPointRating from '@modules/faithPoint/rating/infra/typeorm/entities/FaithPointRating';

@injectable()
class FaithPointRatingRepository implements IFaithPointRatingRepository {
  private ormRepository: Repository<FaithPointRating>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(FaithPointRating);
  }

  public async create(data: ICreateFaithPointRating): Promise<IFindFaithPointRating>{
    try {
        const faithPointRating = this.ormRepository.create(data);
        await this.ormRepository.save(faithPointRating);
        return this.mapToIFindFaithPointRating(faithPointRating);
    }
    catch(error) {
        console.error("Error creating faithPointRating: ", error);
        throw error;
    }
  }

  public async update(id: string, faithPointRating: IUpdateFaithPointRating): Promise<boolean> {
    await this.ormRepository.update(id, faithPointRating);
    return true;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findAll(): Promise<IFindFaithPointRating[]> {
    const faithPointRatings = await this.ormRepository.find({
        relations: ['faithPoint', 'user']
    });
    return faithPointRatings.map(faithPointRating => this.mapToIFindFaithPointRating(faithPointRating));
  }

  public async findById(id: string): Promise<IFindFaithPointRating | undefined> {
    const faithPointRating = await this.ormRepository.findOne({
        where: {
            id: id
        },
        relations: ['faithPoint', 'user']
    });
    return faithPointRating ? this.mapToIFindFaithPointRating(faithPointRating) : undefined;
  }

  public async findByFaithPointId(faithPointId: string): Promise<IFindFaithPointRating[] | undefined> {
    const faithPointRatings = await this.ormRepository.find({ where: { 
        faithPoint: {
            id: faithPointId
        }
     },
        relations: ['faithPoint', 'user']
    });
    return faithPointRatings;
  }

  public async findByUserId(userId: string): Promise<IFindFaithPointRating[] | undefined> {
    const faithPointRatings = await this.ormRepository.find({ where: { 
        user: {
            id: userId
        }
     },
        relations: ['faithPoint', 'user']
    });

    return faithPointRatings.map(faithPointRating => this.mapToIFindFaithPointRating(faithPointRating));
  }

  public async findByRating(rating: number): Promise<IFindFaithPointRating[] | undefined> {
    const faithPointRatings = await this.ormRepository.find({ where: { rating } });
    return faithPointRatings.map(faithPointRating => this.mapToIFindFaithPointRating(faithPointRating));
  }

  private mapToIFindFaithPointRating(faithPointRating: FaithPointRating): IFindFaithPointRating {
    return {
        id: faithPointRating.id,
        faithPoint: faithPointRating.faithPoint,
        user: faithPointRating.user,
        rating: faithPointRating.rating,
        comment: faithPointRating.comment,
    }
  }
}

export default FaithPointRatingRepository;