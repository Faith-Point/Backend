import 'reflect-metadata';
import { DataSource } from 'typeorm';
import ormConfig from '../../ormconfig.json';
import dotenv from 'dotenv';

dotenv.config();

const AppDataSource = new DataSource({
  ...ormConfig,
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
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
