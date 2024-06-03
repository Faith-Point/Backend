import { container } from 'tsyringe';
import FaithPointSubscriptionRepository from '@modules/faithPoint/subscription/infra/typeorm/repositories/FaithPointSubscriptionRepository';
import IFaithPointSubscriptionRepository from '@modules/faithPoint/subscription/domain/repositories/IFaithPointSubscriptionRepository';

container.registerSingleton<IFaithPointSubscriptionRepository>('FaithPointSubscriptionRepository', FaithPointSubscriptionRepository);
