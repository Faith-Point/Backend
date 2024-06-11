import { define } from 'typeorm-seeding';
import { v4 as uuidv4 } from 'uuid';
import { Faker, faker } from '@faker-js/faker';
import FaithPoint from '@modules/faithPoint/faith_point/infra/typeorm/entities/FaithPoint';
import FaithPointService from '@modules/faithPoint/service/infra/typeorm/entities/FaithPointService';

define(FaithPointService, (_fakes: typeof Faker, context?: { faithPoint: FaithPoint }) => {
  if (!context || !context.faithPoint) {
    throw new Error('FaithPointService factory needs a faithPoint to be created');
  }

  const faithPointService = new FaithPointService();
  faithPointService.id = uuidv4();
  faithPointService.name = faker.lorem.word();
  faithPointService.description = faker.lorem.sentence();  
  faithPointService.faith_point = context.faithPoint;
  return faithPointService;
});