import ISocialMediaRepository from '@modules/shared/socialMedia/domain/repositories/ISocialMediaRepository';
import SocialMedia from '@modules/shared/socialMedia/infra/typeorm/entities/SocialMedia';
import ICreateSocialMedia from '@modules/shared/socialMedia/domain/interfaces/ICreateSocialMedia';
import IUpdateSocialMedia from '@modules/shared/socialMedia/domain/interfaces/IUpdateSocialMedia';
import IFindSocialMedia from '@modules/shared/socialMedia/domain/interfaces/IFindSocialMedia';
import { injectable } from 'tsyringe';
import AppDataSource from '@config/data-source';
import { Repository } from 'typeorm';

@injectable()
class SocialMediaRepository implements ISocialMediaRepository {
  private ormRepository: Repository<SocialMedia>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(SocialMedia);
  }
  public async create(data: ICreateSocialMedia): Promise<IFindSocialMedia> {
    try {
      const socialMedia = this.ormRepository.create(data);
      await this.ormRepository.save(socialMedia);
      return this.mapToIFindSocialMedia(socialMedia);
    } catch (error) {
      console.error("Error creating social media: ", error);
      throw error;
    }    
  }

  public async update(id: string, socialMedia: IUpdateSocialMedia): Promise<boolean> {
    await this.ormRepository.update(id, socialMedia);
    return true;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findAll(): Promise<IFindSocialMedia[]> {
    const socialMedias = await this.ormRepository.find();
    return socialMedias.map(socialMedia => this.mapToIFindSocialMedia(socialMedia));
  }

  public async findById(id: string): Promise<IFindSocialMedia | undefined> {
    const socialMedia = await this.ormRepository.findOne({ where: { id } });
    return socialMedia ? this.mapToIFindSocialMedia(socialMedia) : undefined;
  }

  public async findByName(name: string): Promise<IFindSocialMedia | undefined> {
    const socialMedia = await this.ormRepository.findOne({ where: { name } });
    return socialMedia ? this.mapToIFindSocialMedia(socialMedia) : undefined;
  }

  private mapToIFindSocialMedia(socialMedia: SocialMedia): IFindSocialMedia {
    return {
      id: socialMedia.id,
      name: socialMedia.name,
      description: socialMedia.description,
      link: socialMedia.link,
      icon: socialMedia.icon
    };
  }
}

export default SocialMediaRepository;