import logger from '@shared/logger';
import 'dotenv/config';
import AppDataSource from '@config/data-source';

AppDataSource.initialize()
  .then(() => {
    logger.info('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });
