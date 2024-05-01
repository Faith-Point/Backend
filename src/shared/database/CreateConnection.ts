/* eslint-disable no-new */

import { Connection, createConnection, getConnectionOptions } from 'typeorm';
import database from '@config/database';
import IConnectionParameters from './interfaces/ICreateConnection';

class CreateConnection {
  static async execute(connectionName = 'default'): Promise<Connection> {
    const defaultOptions = await getConnectionOptions();

    if (connectionName === 'default') {
      return createConnection(defaultOptions);
    }
    
    const options = this.getConnectionParameters(connectionName);
    return createConnection(
      Object.assign(defaultOptions, {
        type: options.type,
        host: options.host,
        port: options.port,
        username: options.username,
        password: options.password,
        database: options.database,
        schema: options.schema,
      })
    );
  }

  static getConnectionParameters(
    connectionName: string
  ): IConnectionParameters {
    const connection = database.connections.find((elemento) => elemento.name === connectionName);
    if(connection!= undefined){
    return {
      type: connection.type,
      host: connection.host,
      port: connection.port,
      database: connection.database,
      username: connection.username,
      password: connection.password,
      schema: connection.schema,
    };
  }
  else{
    return {
      type: database.connections[0].type,
      host: database.connections[0].host,
      port: database.connections[0].port,
      database: database.connections[0].database,
      username: database.connections[0].username,
      password: database.connections[0].password,
      schema: database.connections[0].schema
    };
  }
}
}

export default CreateConnection;
