import { runSeeder, useSeeding } from 'typeorm-seeding';
import AppDataSource from '@shared/database/typeorm/ormConfig';
import Seeds from '@shared/database/typeorm/seed/seeds/Seeds';

AppDataSource.initialize().then(async () => {
  console.log('Data Source has been initialized!');
  await useSeeding();
  await runSeeder(Seeds);
}).catch((err) => {
  console.error('Error during Data Source initialization', err);
});
