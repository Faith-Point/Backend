import { DataSource } from 'typeorm';
import ormConfig from '../../ormconfig';

export const AppDataSource = new DataSource(ormConfig);
console.log('Entities being used:', AppDataSource.options.entities);

export default {
  ...ormConfig,
  cli: {
    migrationsDir: "./src/shared/database/typeorm/migrations",
  },
  seeds: ["./seed.ts"],
};
