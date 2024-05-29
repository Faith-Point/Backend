import { inject, injectable } from 'tsyringe';
import ISocialMediaRepository from '@modules/shared/socialMedia/domain/repositories/ISocialMediaRepository';
import IFindSocialMedia from '@modules/shared/socialMedia/domain/interfaces/IFindSocialMedia';

@injectable()
class FindSocialMediaService {
    constructor(
        @inject('SocialMediaRepository')
        private socialMediaRepository: ISocialMediaRepository,
    ){}

    public async findAll(): Promise<IFindSocialMedia[]> {
        const socialMedia = await this.socialMediaRepository.findAll();
        return socialMedia; 
    }

    public async findById(id: string): Promise<IFindSocialMedia | undefined> {
        if (!id) {
            throw new Error('An ID must be provided to find a social media.');
        }
        const socialMedia = await this.socialMediaRepository.findById(id);
        return socialMedia; 
    }

    public async findByName(name: string): Promise<IFindSocialMedia | undefined> {
        if (!name) {
            throw new Error('A name must be provided to find a social media.');
        }
        const socialMedia = await this.socialMediaRepository.findByName(name);
        return socialMedia; 
    }    
}

export default FindSocialMediaService;
