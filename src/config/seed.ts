import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { runSeeder } from 'typeorm-seeding';
import dotenv from 'dotenv';
import ormConfig from '../../ormconfig';
import CreateCountries from '@shared/database/typeorm/seed/seeds/0001-contries.seed';
import CreateStates from '@shared/database/typeorm/seed/seeds/0002-states.seed';
import CreateCities from '@shared/database/typeorm/seed/seeds/0003-city.seed';
import CreateAddressess from '@shared/database/typeorm/seed/seeds/0004-address.seed';
import CreateRoles from '@shared/database/typeorm/seed/seeds/0005-role.seed';
import CreateUsers from '@shared/database/typeorm/seed/seeds/0006-user.seed';
import CreateSocialMedias from '@shared/database/typeorm/seed/seeds/0007-SocialMedia.seed';
import CreateContact from '@shared/database/typeorm/seed/seeds/0008-contact.seed';
import CreateReligions from '@shared/database/typeorm/seed/seeds/0009-religions.seed';
import CreateFaithPoints from '@shared/database/typeorm/seed/seeds/0010-faithPoint.seed';
import CreateFaithPointImages from '@shared/database/typeorm/seed/seeds/0011-faithPointImage.seed';
import CreateFaithPointSchedules from '@shared/database/typeorm/seed/seeds/0012-faithPointSchedule.seed';
import CreateFaithPointServices from '@shared/database/typeorm/seed/seeds/0013-faithPointService.seed';
import CreateFaithPointSubscription from '@shared/database/typeorm/seed/seeds/0014-faithPointSubscription.seed';
import CreateFaithPointRatings from '@shared/database/typeorm/seed/seeds/0015-faithPointRating.seed';

dotenv.config();

const runSeeds = async () => {
  const AppDataSource = new DataSource(ormConfig);

  try {
    await AppDataSource.initialize();
    console.log('Data Source has been initialized!');
    
    await runSeeder(CreateCountries);
    await runSeeder(CreateStates);
    await runSeeder(CreateCities);
    await runSeeder(CreateAddressess);
    await runSeeder(CreateRoles);
    await runSeeder(CreateUsers);
    await runSeeder(CreateSocialMedias);
    await runSeeder(CreateContact);
    await runSeeder(CreateReligions);
    await runSeeder(CreateFaithPoints);
    await runSeeder(CreateFaithPointImages);
    await runSeeder(CreateFaithPointSchedules);
    await runSeeder(CreateFaithPointServices);
    await runSeeder(CreateFaithPointSubscription);
    await runSeeder(CreateFaithPointRatings);

    console.log('Seeders have been executed successfully.');
  } catch (error) {
    console.error('Error running seeders:', error);
  } finally {
    await AppDataSource.destroy();
  }
};

runSeeds();
