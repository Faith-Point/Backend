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

		// @ts-ignore
		const options = this.getConnectionParameters(connectionName).shift();

		return createConnection(
			Object.assign(defaultOptions, {
				type: options.type,
				drive: options.drive,
				host: options.host,
				port: options.port,
				database: options.database,
				password: options.password,
				username: options.username,
				schema: options.schema,
			}),
		);
	}

	static getConnectionParameters(connectionName: string): IConnectionParameters {
		// @ts-ignore
		return database.connections.filter(elemento => {
			if (elemento.name === connectionName) {
				const parametres = {
					type: elemento.type,
					host: elemento.host,
					port: elemento.port,
					database: elemento.database,
					password: elemento.password,
					username: elemento.username,
					schema: elemento.schema,
				};

				return parametres;
			}
		});
	}
}

export default CreateConnection;
