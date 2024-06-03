import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import ISocialMediaRepository from '@modules/shared/socialMedia/domain/repositories/ISocialMediaRepository';
import IUpdateSocialMedia from '@modules/shared/socialMedia/domain/interfaces/IUpdateSocialMedia';

@injectable()
class UpdateSocialMediaService {
  constructor(
    @inject('SocialMediaRepository')
    private socialMediaRepository: ISocialMediaRepository,
  ) {}

  public async update(id: string, parameters: IUpdateSocialMedia): Promise<boolean> {
    if(!id) {
      throw new AppError('An ID must be provided for update operations.');
    }

    const socialMediaExists = await this.socialMediaRepository.findById(id);
    if(!socialMediaExists) {
      throw new AppError('Social Media does not exist.');
    }

    try {
      const dateTimeNow = new Date();
      parameters.updated_at = dateTimeNow;
      const updateResult = await this.socialMediaRepository.update(id, parameters);
      return updateResult;
    } catch(error) {
      throw new AppError(`Failed to update social media:` + error);
    }
  }
}

export default UpdateSocialMediaService;