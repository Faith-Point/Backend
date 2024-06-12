import { Seeder, Factory } from "typeorm-seeding";
import AppDataSource from "@config/data-source";
import log from "@shared/logger";
import Address from "@modules/shared/address/infra/typeorm/entities/Address";
import Religion from "@modules/faithPoint/religions/infra/typeorm/entities/Religion";
import Contact from "@modules/shared/contact/infra/typeorm/entities/Contact";
import SocialMedia from "@modules/shared/socialMedia/infra/typeorm/entities/SocialMedia";
import FaithPoint from "@modules/faithPoint/faith_point/infra/typeorm/entities/FaithPoint";
import CreateReligions from "@shared/database/typeorm/seed/seeds/0009-religions.seed";
import CreateContacts from "@shared/database/typeorm/seed/seeds/0008-contact.seed";
import CreateSocialMedias from "@shared/database/typeorm/seed/seeds/0007-SocialMedia.seed";
import CreateAddresses from "@shared/database/typeorm/seed/seeds/0004-address.seed";
import {
  initializeDataSource,
  destroyDataSource,
} from "@shared/util/data-source-manager";

function getRandomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default class CreateFaithPoints implements Seeder {
  public async run(factory: Factory): Promise<any> {
    await initializeDataSource();

    const religionRepository = AppDataSource.getRepository(Religion);
    let religions = await religionRepository.find();

    if (religions.length === 0) {
      await CreateReligions;
      religions = await religionRepository.find();
    }

    const contactRepository = AppDataSource.getRepository(Contact);
    let contacts = await contactRepository.find();

    if (contacts.length === 0) {
      await CreateContacts;
      contacts = await contactRepository.find();
    }
    const randomContact = getRandomElement(contacts);

    const socialMediaRepository = AppDataSource.getRepository(SocialMedia);
    let socialMedias = await socialMediaRepository.find();

    if (socialMedias.length === 0) {
      await CreateSocialMedias;
      socialMedias = await socialMediaRepository.find();
    }
    const randomSocialMedia = getRandomElement(socialMedias);

    const addressRepository = AppDataSource.getRepository(Address);
    let addresses = await addressRepository.find();

    if (addresses.length === 0) {
      await CreateAddresses;
      addresses = await addressRepository.find();
    }
    const randomAddress = getRandomElement(addresses);

    const faithPointRepository = AppDataSource.getRepository(FaithPoint);
    const faithPoints = await faithPointRepository.find();

    if (faithPoints.length > 0) {
      log.warn("Faith Points already seeded.");
    } else {
      for (const religion of religions) {
        await factory(FaithPoint)({
          religion,
          address: randomAddress,
          socialMedia: randomSocialMedia,
          contact: randomContact,
        }).createMany(5);
      }
    }

    await destroyDataSource();
  }
}
