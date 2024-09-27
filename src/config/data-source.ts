import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const dataSourceConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [
    "./src/modules/**/infra/typeorm/entities/*.ts",
    "./src/modules/shared/**/infra/typeorm/entities/*.ts",
    path.join(__dirname, '..', '**', 'entities', '*.{ts,js}'),
  ],
  migrations: [
    "./src/shared/database/typeorm/migrations/*.ts",
    path.join(__dirname, '..', 'migrations', '*.{ts,js}'),
  ],
  logging: true,
};

console.log('Connecting to DB with these configurations:', dataSourceConfig);
console.log('Environment Variables:', process.env.DB_USERNAME, process.env.DB_PASSWORD);

// Cria a fonte de dados diretamente usando as configurações acima
const AppDataSource = new DataSource(dataSourceConfig);

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
