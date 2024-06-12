import { Seeder, Factory } from "typeorm-seeding";
import AppDataSource from "@config/data-source";
import FaithPoint from "@modules/faithPoint/faith_point/infra/typeorm/entities/FaithPoint";
import log from "@shared/logger";
import FaithPointSubscription from "@modules/faithPoint/subscription/infra/typeorm/entities/FaithPointSubscription";
import User from "@modules/user/infra/typeorm/entities/User";
import CreateFaithPoints from "@shared/database/typeorm/seed/seeds/0010-faithPoint.seed";
import CreateUsers from "@shared/database/typeorm/seed/seeds/0006-user.seed";
import {
  initializeDataSource,
  destroyDataSource,
} from "@shared/util/data-source-manager";

function getRandomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default class CreateFaithPointSubscription implements Seeder {
  public async run(factory: Factory): Promise<any> {
    await initializeDataSource();

    const faithPointRepository = AppDataSource.getRepository(FaithPoint);
    let faithPoints = await faithPointRepository.find();

    if (faithPoints.length === 0) {
      await CreateFaithPoints;
      faithPoints = await faithPointRepository.find();
    }
    const randomFaithPoint = getRandomElement(faithPoints);

    const userRepository = AppDataSource.getRepository(User);
    let users = await userRepository.find();

    if (users.length === 0) {
      await CreateUsers;
      users = await userRepository.find();
    }
    const randomUser = getRandomElement(users);

    const faithPointSubscriptionsRepository = AppDataSource.getRepository(FaithPointSubscription);
    const faithPointSubscriptions = await faithPointSubscriptionsRepository.find();

    if (faithPointSubscriptions.length > 0) {
      log.warn("FaithPointSubscriptions already seeded.");
    } else {
      for (let i = 0; i < faithPoints.length; i++) {
        await factory(FaithPointSubscription)({ faithPoint: randomFaithPoint, user: randomUser }).createMany(5);
      }
    }

    await destroyDataSource();
  }
}
