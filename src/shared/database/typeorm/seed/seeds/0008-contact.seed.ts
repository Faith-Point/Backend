import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import Contact from '@modules/shared/contact/infra/typeorm/entities/Contact';
import log from '@shared/logger';
import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';

function truncateString(str: string, maxLength: number): string {
  return str.length > maxLength ? str.substring(0, maxLength) : str;
}

export default class CreateContact implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const contactRepository = dataSource.getRepository(Contact);
    const contacts = await contactRepository.find();

    if (contacts.length > 0) {
      log.warn('Contacts already seeded.');
    } else {
      const contactEntities = Array.from({ length: 10 }).map(() => {
        const contact = new Contact();
        contact.id = uuidv4();
        contact.name = truncateString(faker.person.fullName(), 20); 
        contact.phone = truncateString(faker.phone.number(), 20); 
        contact.email = truncateString(faker.internet.email(), 20);
        return contact;
      });
      await contactRepository.save(contactEntities);
      log.info('Contacts seeded.');
    }
  }
}
