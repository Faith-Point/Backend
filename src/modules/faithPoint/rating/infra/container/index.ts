import { container } from 'tsyringe';
import FaithPointRatingRepository from '@modules/faithPoint/rating/infra/typeorm/repositories/FaithPointRatingRepository';
import IFaithPointRatingRepository from '@modules/faithPoint/rating/domain/repositories/IFaithPointRatingRepository';

container.registerSingleton<IFaithPointRatingRepository>('FaithPointRatingRepository', FaithPointRatingRepository);