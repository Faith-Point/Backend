import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import ISocialMediaRepository from '@modules/shared/socialMedia/domain/repositories/ISocialMediaRepository';

@injectable()
class DeleteSocialMediaService {
  constructor(
    @inject('SocialMediaRepository')
    private socialMediaRepository: ISocialMediaRepository,
  ) {}

  public async delete(id: string): Promise<void> {
    if(!id) {
      throw new AppError('An ID must be provided for delete operations.');
    }

    const socialMediaExists = await this.socialMediaRepository.findById(id);
    if(!socialMediaExists) {
      throw new AppError('Social Media does not exist.');
    }

    try {
      await this.socialMediaRepository.delete(id);
    } catch(error) {
      throw new AppError(`Failed to delete social media:` + error);
    }
  }
}

export default DeleteSocialMediaService;