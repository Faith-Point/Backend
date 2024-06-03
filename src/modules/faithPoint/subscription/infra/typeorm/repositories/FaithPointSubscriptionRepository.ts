import { injectable } from 'tsyringe';
import AppDataSource from '@config/data-source';
import { Repository } from 'typeorm';
import { IFaithPointSubscription } from '@modules/faithPoint/subscription/domain/interfaces/IFaithPointSubscription';
import ICreateFaithPointSubscription from '@modules/faithPoint/subscription/domain/interfaces/ICreateFaithPointSubscription';
import IUpdateFaithPointSubscription from '@modules/faithPoint/subscription/domain/interfaces/IUpdateFaithPointSubscription';
import IFindFaithPointSubscription from '@modules/faithPoint/subscription/domain/interfaces/IFindFaithPointSubscription';
import IFaithPointSubscriptionRepository from '@modules/faithPoint/subscription/domain/repositories/IFaithPointSubscriptionRepository';
import FaithPointSubscription from '@modules/faithPoint/subscription/infra/typeorm/entities/FaithPointSubscription';

@injectable()
class FaithPointSubscriptionRepository implements IFaithPointSubscriptionRepository {
  private ormRepository: Repository<IFaithPointSubscription>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(FaithPointSubscription);
  }

  public async create(data: ICreateFaithPointSubscription): Promise<IFindFaithPointSubscription> {
    try {
      const faithPointSubscription = this.ormRepository.create(data);
      await this.ormRepository.save(faithPointSubscription);
      return this.mapToIFindFaithPointSubscription(faithPointSubscription);
    } catch (error) {
      console.error("Error creating faith point subscription: ", error);
      throw error;
    }
  }

  public async update(id: string, faithPointSubscription: IUpdateFaithPointSubscription): Promise<boolean> {
    await this.ormRepository.update(id, faithPointSubscription);
    return true;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findAll(): Promise<IFindFaithPointSubscription[]> {
    const faithPointSubscriptions = await this.ormRepository.find({
        relations: ['faith_point', 'user']
    });
    return faithPointSubscriptions.map(faithPointSubscription => this.mapToIFindFaithPointSubscription(faithPointSubscription));
  }

  public async findById(id: string): Promise<IFindFaithPointSubscription | undefined> {
    const faithPointSubscription = await this.ormRepository.findOne({
        where: {
            id: id
        },
        relations: ['faith_point', 'user']
    });
    return faithPointSubscription ? this.mapToIFindFaithPointSubscription(faithPointSubscription) : undefined;
  }

  public async findByFaithPointId(faithPointId: string): Promise<IFindFaithPointSubscription | undefined> {
    const faithPointSubscriptions = await this.ormRepository.find({
        where: {
            faith_point: {
                id: faithPointId            
            },
        },
        relations: ['faith_point', 'user']
    });
    return faithPointSubscriptions ? this.mapToIFindFaithPointSubscription(faithPointSubscriptions[0]) : undefined;
  }

  private mapToIFindFaithPointSubscription(faithPointSubscription: IFaithPointSubscription): IFindFaithPointSubscription {
    return {
      id: faithPointSubscription.id,
      faith_point: faithPointSubscription.faith_point,
      user: faithPointSubscription.user,
      is_active: faithPointSubscription.is_active
    };
  }
}

export default FaithPointSubscriptionRepository;