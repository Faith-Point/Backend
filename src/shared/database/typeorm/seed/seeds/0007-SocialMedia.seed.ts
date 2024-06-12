import { Seeder, Factory } from "typeorm-seeding";
import AppDataSource from "@config/data-source";
import log from "@shared/logger";
import SocialMedia from "@modules/shared/socialMedia/infra/typeorm/entities/SocialMedia";
import {
  initializeDataSource,
  destroyDataSource,
} from "@shared/util/data-source-manager";

export default class CreateSocialMedias implements Seeder {
  public async run(factory: Factory): Promise<any> {
    await initializeDataSource();
    const socialMediaRepository = AppDataSource.getRepository(SocialMedia);
    const socialMedias = await socialMediaRepository.find();

    if (socialMedias.length > 0) {
      log.warn("SocialMedias already seeded.");
    } else {
      await factory(SocialMedia)().createMany(10);
    }
    await destroyDataSource();
  }
}
