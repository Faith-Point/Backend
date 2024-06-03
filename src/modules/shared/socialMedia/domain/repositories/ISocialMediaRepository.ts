import ICreateSocialMedia from '@modules/shared/socialMedia/domain/interfaces/ICreateSocialMedia'
import IFindSocialMedia from '@modules/shared/socialMedia/domain/interfaces/IFindSocialMedia'
import IUpdateSocialMedia from '@modules/shared/socialMedia/domain/interfaces/IUpdateSocialMedia'

interface ISocialMediaRepository {
    create(data: ICreateSocialMedia): Promise<IFindSocialMedia>;
    update(id: string, socialMedia: IUpdateSocialMedia): Promise<boolean>;
    delete(id: string): Promise<void>;
    findAll(): Promise<IFindSocialMedia[]>;
    findById(id: string): Promise<IFindSocialMedia | undefined>;
    findByName(name: string): Promise<IFindSocialMedia | undefined>;
  }
  
  export default ISocialMediaRepository;