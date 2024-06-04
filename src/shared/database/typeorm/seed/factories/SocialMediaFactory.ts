import { v4 as uuidv4 } from 'uuid';
import { define } from 'typeorm-seeding';
import { faker } from '@faker-js/faker';

import SocialMedia from '@modules/shared/socialMedia/infra/typeorm/entities/SocialMedia';

define(SocialMedia, () => {
  const socialMedia = new SocialMedia();
  socialMedia.id = uuidv4();
  socialMedia.name = faker.company.name();
  socialMedia.icon = faker.helpers.slugify(socialMedia.name);
  socialMedia.link = faker.internet.url();
  socialMedia.created_at = new Date();
  socialMedia.updated_at = new Date();
  socialMedia.deleted_at = new Date();
  return socialMedia;
});

