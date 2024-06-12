import { define } from 'typeorm-seeding';
import { v4 as uuidv4 } from 'uuid';
import { Faker, faker } from '@faker-js/faker';
import Address from '@modules/shared/address/infra/typeorm/entities/Address';
import Religion from '@modules/faithPoint/religions/infra/typeorm/entities/Religion';
import SocialMedia from '@modules/shared/socialMedia/infra/typeorm/entities/SocialMedia';
import Contact from '@modules/shared/contact/infra/typeorm/entities/Contact';

import FaithPoint from '@modules/faithPoint/faith_point/infra/typeorm/entities/FaithPoint';

define(FaithPoint, (_fakes: typeof Faker, context?: { religion: Religion, address: Address, socialMedia: SocialMedia, contact: Contact }) => {
  if (!context || !context.religion || !context.address || !context.socialMedia || !context.contact) {
    throw new Error('FaithPoint factory needs a religion, address, socialMedia and contact to be created');
  }

  const faithPoint = new FaithPoint();
  faithPoint.id = uuidv4();
  faithPoint.name = faker.lorem.word(); 
  faithPoint.description = faker.lorem.sentence();
  faithPoint.religion = context.religion;
  faithPoint.address = context.address;
  faithPoint.socialMedia = context.socialMedia;
  faithPoint.contact = context.contact;  
  return faithPoint;
});