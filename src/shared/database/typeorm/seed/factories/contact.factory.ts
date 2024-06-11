import { v4 as uuidv4 } from 'uuid';
import { define } from 'typeorm-seeding';
import { faker } from '@faker-js/faker';
import Contact from '@modules/shared/contact/infra/typeorm/entities/Contact';

function truncateString(str: string, maxLength: number): string {
    return str.length > maxLength ? str.substring(0, maxLength) : str;
}

define(Contact, () => {
    const contact = new Contact();
    contact.id = uuidv4();
    contact.name = truncateString(faker.person.fullName(), 20);
    contact.phone = faker.phone.number();
    contact.email = truncateString(faker.internet.email(), 20);
    return contact;
});
