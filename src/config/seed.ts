import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { useSeeding } from 'typeorm-seeding';
import { runSeeders } from 'typeorm-extension'
import dotenv from 'dotenv';
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

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}
const runSeeds = async () => {
  const dataSourceConfig: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432', 10), // Porta 5432 como esperado
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [
      "./src/modules/**/infra/typeorm/entities/*.ts",
      "./src/modules/shared/**/infra/typeorm/entities/*.ts"
    ],
    migrations: [
      "./src/shared/database/typeorm/migrations/*.ts"
    ],
    logging: true,
  };
  
  try {
    const AppDataSource = new DataSource(dataSourceConfig);
    await AppDataSource.initialize();
    console.log('Data Source has been initialized!');
    await useSeeding();

    console.log('Metadata loaded for entities:', AppDataSource.entityMetadatas.map(e => e.name));

    await runSeeders(AppDataSource, {
      seeds: [
        CreateCountries,
        CreateStates,
        CreateCities,
        CreateAddressess,
        CreateRoles,
        CreateUsers,
        CreateSocialMedias,
        CreateContact,
        CreateReligions,
        CreateFaithPoints,
        CreateFaithPointImages,
        CreateFaithPointSchedules,
        CreateFaithPointServices,
        CreateFaithPointSubscription,
        CreateFaithPointRatings        
      ]
    })
    
    console.log('Seeders have been executed successfully.');
  } catch (error) {
    console.error('Error running seeders:', error);
  }
};

runSeeds();
