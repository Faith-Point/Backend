import { DataSource, DataSourceOptions } from 'typeorm';
import AppDataSource from '@config/data-source';
import ICreateConnection from './interfaces/ICreateConnection';
import database from '@config/database';

class CreateConnection {
  static async execute(connectionName = 'default'): Promise<DataSource> {
    if (connectionName === 'default') {
      await AppDataSource.initialize();
      return AppDataSource;
    }

    const options = this.getConnectionParameters(connectionName);

    const dataSourceOptions: DataSourceOptions = {
      ...AppDataSource.options,
      type: 'postgres' as any,
      host: options.host,
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
      name: connection.name || 'faith-point',
      type: connection.type || 'postgres',
      host: connection.host || 'faith-point',
      port: connection.port || 5432,
      database: connection.database || 'faith-point',
      password: connection.password || 'postgres',
      username: connection.username || 'postgres',
      schema: connection.schema || 'public',
    };
  }
}

export default CreateConnection;
