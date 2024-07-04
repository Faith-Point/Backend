import { DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const ormConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
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
};

export default ormConfig;
