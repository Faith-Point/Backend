import { v4 as uuidv4 } from 'uuid';
import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import ISocialMediaRepository from '@modules/shared/socialMedia/domain/repositories/ISocialMediaRepository';
import ICreateSocialMedia from '@modules/shared/socialMedia/domain/interfaces/ICreateSocialMedia';
import IFindSocialMedia from '@modules/shared/socialMedia/domain/interfaces/IFindSocialMedia';

@injectable()
class CreateSocialMediaService {
    constructor(
        @inject('SocialMediaRepository')
        private socialMediaRepository: ISocialMediaRepository,
    ){}

    public async create(parameters: ICreateSocialMedia): Promise<IFindSocialMedia> {
        if(!parameters.name) {
            throw new AppError('Missing required parameters: name');
        }
        const dateTimeNow = new Date();
        const newSocialMedia = await this.socialMediaRepository.create({
            id: uuidv4(),
            name: parameters.name,
            description: parameters.description,
            icon: parameters.icon,
            link: parameters.link,
            created_at: dateTimeNow,
        });
        return newSocialMedia;
    }
}

export default CreateSocialMediaService;