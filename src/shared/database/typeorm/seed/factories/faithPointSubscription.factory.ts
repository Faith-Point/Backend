import { define } from 'typeorm-seeding';
import { v4 as uuidv4 } from 'uuid';
import { Faker, faker } from '@faker-js/faker';
import FaithPoint from '@modules/faithPoint/faith_point/infra/typeorm/entities/FaithPoint';
import FaithPointSubscription from '@modules/faithPoint/subscription/infra/typeorm/entities/FaithPointSubscription';
import User from '@modules/user/infra/typeorm/entities/User';

define(FaithPointSubscription, (_fakes: typeof Faker, context?: { faithPoint: FaithPoint, user: User }) => {
  if (!context || !context.faithPoint) {
    throw new Error('FaithPointSubscription factory needs a faithPoint and user to be created');
  }

  const faithPointSubscription = new FaithPointSubscription();
  faithPointSubscription.id = uuidv4();
  faithPointSubscription.is_active = faker.datatype.boolean();
  faithPointSubscription.user = context.user;
  faithPointSubscription.faith_point = context.faithPoint;  
  return faithPointSubscription;
});