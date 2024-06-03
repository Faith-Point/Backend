import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import IFaithPointSubscriptionRepository from '@modules/faithPoint/subscription/domain/repositories/IFaithPointSubscriptionRepository';

@injectable()
class DeleteFaithPointSubscriptionService {
    constructor(
        @inject('FaithPointSubscriptionRepository')
        private faithPointSubscriptionRepository: IFaithPointSubscriptionRepository,
    ) {}

    public async delete(id: string): Promise<void> {
        if(!id) {
            throw new AppError('An ID must be provided for delete operations.');
        }

        const faithPointSubscriptionExists = await this.faithPointSubscriptionRepository.findById(id);
        if(!faithPointSubscriptionExists) {
            throw new AppError('Faith Point Subscription does not exist.');
        }

        try {
            await this.faithPointSubscriptionRepository.delete(id);
        } catch(error) {
            throw new AppError(`Failed to delete faith point subscription:` + error);
        }
    }
}

export default DeleteFaithPointSubscriptionService;