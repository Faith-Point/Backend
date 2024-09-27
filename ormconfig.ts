import * as dotenv from 'dotenv';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

if (process.env.NODE_ENV !== 'production') {
  const envFound = dotenv.config();
  if (envFound.error) {
    throw new Error("Couldn't find .env file");
  }
}

const ormConfig: PostgresConnectionOptions = {
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
  logging: true,
};

export default ormConfig;
