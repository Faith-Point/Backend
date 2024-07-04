import 'reflect-metadata';
import { DataSource } from 'typeorm';
import ormConfig from '../../ormconfig';
import dotenv from 'dotenv';

dotenv.config();

const AppDataSource = new DataSource(ormConfig);

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
