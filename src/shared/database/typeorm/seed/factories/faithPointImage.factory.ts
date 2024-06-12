import { define } from 'typeorm-seeding';
import { v4 as uuidv4 } from 'uuid';
import { Faker, faker } from '@faker-js/faker';
import FaithPointImage from '@modules/faithPoint/image/infra/typeorm/entities/FaithPointImage';
import FaithPoint from '@modules/faithPoint/faith_point/infra/typeorm/entities/FaithPoint';

define(FaithPointImage, (_fakes: typeof Faker, context?: { faithPoint: FaithPoint }) => {
  if (!context || !context.faithPoint) {
    throw new Error('FaithPointImage factory needs a faithPoint to be created');
  }

  const faithPointImage = new FaithPointImage();
  faithPointImage.id = uuidv4();
  faithPointImage.url = faker.image.url();
  faithPointImage.faith_point = context.faithPoint;
  return faithPointImage;
});