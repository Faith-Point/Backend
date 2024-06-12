import { Seeder, Factory } from "typeorm-seeding";
import AppDataSource from "@config/data-source";
import FaithPoint from "@modules/faithPoint/faith_point/infra/typeorm/entities/FaithPoint";
import log from "@shared/logger";
import FaithPointImage from "@modules/faithPoint/image/infra/typeorm/entities/FaithPointImage";
import CreateFaithPoints from "@shared/database/typeorm/seed/seeds/0010-faithPoint.seed";
import {
  initializeDataSource,
  destroyDataSource,
} from "@shared/util/data-source-manager";

export default class CreateFaithPointImages implements Seeder {
  public async run(factory: Factory): Promise<any> {
    await initializeDataSource();
    const faithPointRepository = AppDataSource.getRepository(FaithPoint);
    let faithPoints = await faithPointRepository.find();

    if (faithPoints.length === 0) {
      await CreateFaithPoints;
      faithPoints = await faithPointRepository.find();
    }

    const faithPointImageRepository =
      AppDataSource.getRepository(FaithPointImage);
    const faithPointImages = await faithPointImageRepository.find();

    if (faithPointImages.length > 0) {
      log.warn("FaithPointImages already seeded.");
      await AppDataSource.destroy();
    } else {
      for (const faithPoint of faithPoints) {
        await factory(FaithPointImage)({ faithPoint }).createMany(5);
      }
    }
    await destroyDataSource();
  }
}
