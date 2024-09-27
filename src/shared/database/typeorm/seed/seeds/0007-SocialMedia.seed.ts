import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import SocialMedia from '@modules/shared/socialMedia/infra/typeorm/entities/SocialMedia';
import log from '@shared/logger';
import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';

function truncateString(str: string, maxLength: number): string {
  return str.length > maxLength ? str.substring(0, maxLength) : str;
}

export default class CreateSocialMedias implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const socialMediaRepository = dataSource.getRepository(SocialMedia);
    const socialMedias = await socialMediaRepository.find();

    if (socialMedias.length > 0) {
      log.warn('SocialMedias already seeded.');
    } else {
      const socialMediaEntities = Array.from({ length: 10 }).map(() => {
        const socialMedia = new SocialMedia();
        socialMedia.id = uuidv4();
        socialMedia.name = truncateString(faker.company.name(), 50);
        socialMedia.description = truncateString(faker.company.catchPhrase(), 50);
        socialMedia.link = truncateString(faker.internet.url(), 50);
        socialMedia.icon = truncateString(faker.image.url(), 50);
        return socialMedia;
      });
      await socialMediaRepository.save(socialMediaEntities);
      log.info('SocialMedias seeded.');
    }
  }
}
