import { inject, injectable } from 'tsyringe';
import IFaithPointSubscriptionRepository from '@modules/faithPoint/subscription/domain/repositories/IFaithPointSubscriptionRepository';
import IFindFaithPointSubscription from '@modules/faithPoint/subscription/domain/interfaces/IFindFaithPointSubscription';

@injectable()
class FindFaithPointSubscriptionService {
    constructor(
        @inject('FaithPointSubscriptionRepository')
        private faithPointSubscriptionRepository: IFaithPointSubscriptionRepository,
    ){}

    public async findAll(): Promise<IFindFaithPointSubscription[]> {
        return await this.faithPointSubscriptionRepository.findAll();
    }

    public async findById(id: string): Promise<IFindFaithPointSubscription | undefined> {
        return await this.faithPointSubscriptionRepository.findById(id);
    }

    public async findByFaithPointId(faithPointId: string): Promise<IFindFaithPointSubscription | undefined> {
        return await this.faithPointSubscriptionRepository.findByFaithPointId(faithPointId);
    }
}

export default FindFaithPointSubscriptionService;