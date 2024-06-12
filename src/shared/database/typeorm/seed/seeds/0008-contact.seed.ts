import { Seeder, Factory } from "typeorm-seeding";
import AppDataSource from "@config/data-source";
import log from "@shared/logger";
import Contact from "@modules/shared/contact/infra/typeorm/entities/Contact";
import {
  initializeDataSource,
  destroyDataSource,
} from "@shared/util/data-source-manager";

export default class CreateContact implements Seeder {
  public async run(factory: Factory): Promise<any> {
    await initializeDataSource();
    const contactRepository = AppDataSource.getRepository(Contact);
    const contacts = await contactRepository.find();

    if (contacts.length > 0) {
      log.warn("Contacts already seeded.");      
    } else {
      await factory(Contact)().createMany(10);
    }
    await destroyDataSource();
  }
}
