import { v4 as uuidv4 } from 'uuid';
import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import IFaithPointSubscriptionRepository from '@modules/faithPoint/subscription/domain/repositories/IFaithPointSubscriptionRepository';
import ICreateFaithPointSubscription from '@modules/faithPoint/subscription/domain/interfaces/ICreateFaithPointSubscription';
import IFindFaithPointSubscription from '@modules/faithPoint/subscription/domain/interfaces/IFindFaithPointSubscription';

@injectable()
class CreateFaithPointSubscriptionService {
    constructor(
        @inject('FaithPointSubscriptionRepository')
        private faithPointSubscriptionRepository: IFaithPointSubscriptionRepository,
    ){}

    public async create(parameters: ICreateFaithPointSubscription): Promise<IFindFaithPointSubscription> {
        if(!parameters.faith_point || !parameters.user) {
            throw new AppError('Missing required parameters: faith_point or user');
        }
        const dateTimeNow = new Date();
        const newFaithPointSubscription = await this.faithPointSubscriptionRepository.create({
            id: uuidv4(),
            faith_point: parameters.faith_point,
            user: parameters.user,
            is_active: parameters.is_active,
            created_at: dateTimeNow,
        });
        return newFaithPointSubscription;
    }
}

export default CreateFaithPointSubscriptionService;