import { define } from 'typeorm-seeding';
import { v4 as uuidv4 } from 'uuid';
import { Faker, faker } from '@faker-js/faker';
import FaithPoint from '@modules/faithPoint/faith_point/infra/typeorm/entities/FaithPoint';
import User from '@modules/user/infra/typeorm/entities/User';
import FaithPointRating from '@modules/faithPoint/rating/infra/typeorm/entities/FaithPointRating';

define(FaithPointRating, (_fakes: typeof Faker, context?: { faithPoint: FaithPoint, user: User }) => {
  if (!context || !context.faithPoint) {
    throw new Error('FaithPointRating factory needs a faithPoint and user to be created');
  }

  const faithPointRating = new FaithPointRating();
  faithPointRating.id = uuidv4();
  faithPointRating.rating = faker.number.int(({ min: 1, max: 10 }));
  faithPointRating.comment = faker.lorem.sentence();
  faithPointRating.user = context.user;
  faithPointRating.faithPoint = context.faithPoint;
  return faithPointRating;
});