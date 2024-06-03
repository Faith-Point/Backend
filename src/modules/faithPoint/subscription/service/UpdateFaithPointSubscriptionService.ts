import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import IFaithPointSubscriptionRepository from '@modules/faithPoint/subscription/domain/repositories/IFaithPointSubscriptionRepository';
import IUpdateFaithPointSubscription from '@modules/faithPoint/subscription/domain/interfaces/IUpdateFaithPointSubscription';

@injectable()
class UpdateFaithPointSubscriptionService {
    constructor(
        @inject('FaithPointSubscriptionRepository')
        private faithPointSubscriptionRepository: IFaithPointSubscriptionRepository,
    ){}

    public async update(id: string, parameters: IUpdateFaithPointSubscription): Promise<void> {
        if(!id) {
            throw new AppError('An ID must be provided for update operations.');
        }
        const faithPointSubscriptionExists = await this.faithPointSubscriptionRepository.findById(id);
        if(!faithPointSubscriptionExists) {
            throw new AppError('Faith Point Subscription does not exist.');
        }
        try {
            await this.faithPointSubscriptionRepository.update(id, parameters);
        } catch(error) {
            throw new AppError(`Failed to update faith point subscription:` + error);
        }
    }
}

export default UpdateFaithPointSubscriptionService;