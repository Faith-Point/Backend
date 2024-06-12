import { v4 as uuidv4 } from 'uuid';
import { define } from 'typeorm-seeding';
import { faker } from '@faker-js/faker';
import SocialMedia from '@modules/shared/socialMedia/infra/typeorm/entities/SocialMedia';

function truncateString(str: string, maxLength: number): string {
    return str.length > maxLength ? str.substring(0, maxLength) : str;
}
define(SocialMedia, () => {
    const socialMedia = new SocialMedia();
    socialMedia.id = uuidv4();
    socialMedia.name = truncateString(faker.company.name(), 50);
    socialMedia.description = truncateString(faker.company.catchPhrase(), 50);
    socialMedia.link = truncateString(faker.internet.url(), 50);
    socialMedia.icon = truncateString(faker.image.url(), 50);
    return socialMedia;
});
