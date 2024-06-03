import { container } from 'tsyringe';
import SocialMediaRepository from '@modules/shared/socialMedia/infra/typeorm/repositories/SocialMediaRepository';
import ISocialMediaRepository from '@modules/shared/socialMedia/domain/repositories/ISocialMediaRepository';

container.registerSingleton<ISocialMediaRepository>('SocialMediaRepository', SocialMediaRepository);