import ICreateFaithPointSubscription from '@modules/faithPoint/subscription/domain/interfaces/ICreateFaithPointSubscription';
import IUpdateFaithPointSubscription from '@modules/faithPoint/subscription/domain/interfaces/IUpdateFaithPointSubscription';
import IFindFaithPointSubscription from '@modules/faithPoint/subscription/domain/interfaces/IFindFaithPointSubscription';

interface IFaithPointSubscriptionRepository {
    create(data: ICreateFaithPointSubscription): Promise<IFindFaithPointSubscription>;
    update(id: string, faithPointSubscription: IUpdateFaithPointSubscription): Promise<boolean>;
    delete(id: string): Promise<void>;
    findAll(): Promise<IFindFaithPointSubscription[]>;
    findById(id: string): Promise<IFindFaithPointSubscription | undefined>;
    findByFaithPointId(faithPointId: string): Promise<IFindFaithPointSubscription | undefined>;
}

export default IFaithPointSubscriptionRepository;