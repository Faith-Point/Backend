import 'reflect-metadata';
import { DataSource } from 'typeorm';
import ormConfig from '../../ormconfig.json';

const AppDataSource = new DataSource({
  ...ormConfig,
  type: 'postgres',
  host: process.env.DB_HOST || ormConfig.host,
  port: parseInt(process.env.DB_PORT || ormConfig.port.toString(), 10),
  username: process.env.DB_USERNAME || ormConfig.username,
  password: process.env.DB_PASSWORD || ormConfig.password,
  database: process.env.DB_NAME || ormConfig.database,
});

export const initializeDataSource = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Data Source has been initialized!');
  } catch (err) {
    console.error('Error during Data Source initialization:', err);
    throw err;
  }
};

export default AppDataSource;
