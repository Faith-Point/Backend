import { DataSource, DataSourceOptions } from 'typeorm';
import database from '@config/database';
import ICreateConnection from './interfaces/ICreateConnection';

class CreateConnection {
  static async execute(connectionName = 'default'): Promise<DataSource> {
    const defaultOptions: DataSourceOptions = {
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432', 10) || 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_NAME || 'faith-point',
      entities: [
        './src/modules/**/infra/typeorm/entities/*.ts',
        './src/modules/shared/**/infra/typeorm/entities/*.ts'
      ],
      migrations: [
        './src/shared/database/typeorm/migrations/*.ts'
      ],
      synchronize: false,
      logging: true,
    };

    if (connectionName === 'default') {
      const dataSource = new DataSource(defaultOptions);
      await dataSource.initialize();
      return dataSource;
    }

    const options = this.getConnectionParameters(connectionName);

    const dataSourceOptions: DataSourceOptions = {
      ...defaultOptions,
      type: options.type as 'postgres',
      host: options.host,
      port: parseInt(options.port.toString(), 10),
      database: options.database,
      password: options.password,
      username: options.username,
      schema: options.schema,
    };

    const dataSource = new DataSource(dataSourceOptions);
    await dataSource.initialize();
    return dataSource;
  }

  static getConnectionParameters(connectionName: string): ICreateConnection {
    const connection = database.connections.find(element => element.name === connectionName);
    if (!connection) {
      throw new Error(`Connection with name ${connectionName} not found`);
    }
    return {
      type: connection.type || 'postgres',
      host: connection.host || 'faith-point',
      port: connection.port || 5432,
      database: connection.database || 'default',
      password: connection.password || '',
      username: connection.username || '',
      schema: connection.schema || 'public',
      name: connection.name || 'default',
    };
  }
}

export default CreateConnection;
