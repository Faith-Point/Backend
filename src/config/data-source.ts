import 'reflect-metadata';
import { DataSource } from 'typeorm';
import ormConfig from '../../ormconfig.json';

export const AppDataSource = new DataSource({
  ...ormConfig,
  type: 'postgres',
  host: process.env.DB_HOST || ormConfig.host,
  port: parseInt(process.env.DB_PORT || ormConfig.port.toString()),
  username: process.env.DB_USERNAME || ormConfig.username,
  password: process.env.DB_PASSWORD || ormConfig.password,
  database: process.env.DB_NAME || ormConfig.database,
});
