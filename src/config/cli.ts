import { DataSource } from 'typeorm';
import ormConfig from '../../ormconfig';

export const AppDataSource = new DataSource(ormConfig);

export default {
  ...ormConfig,
  cli: {
    migrationsDir: "./src/shared/database/typeorm/migrations",
  },
};
