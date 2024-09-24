import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const dataSourceConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'faith-point',
  port: parseInt(process.env.DB_PORT || '3333', 10), // Porta 3333 como esperado
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'faith-point',
  entities: [
    "./src/modules/**/infra/typeorm/entities/*.ts",
    "./src/modules/shared/**/infra/typeorm/entities/*.ts"
  ],
  migrations: [
    "./src/shared/database/typeorm/migrations/*.ts"
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
