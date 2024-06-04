import { DataSource } from 'typeorm';
import ormConfigImports from './ormConfigImport';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'faith-point',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'faith-point',
  entities: [
    ...ormConfigImports.entities
  ],
  migrations: [
    './src/shared/database/typeorm/migrations/*.ts'
  ],
});

export default AppDataSource;