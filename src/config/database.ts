import 'dotenv/config';

const database = {
  connections: [
    {
      name: process.env.DB_NAME || 'faith-point',
      type: process.env.DB_TYPE || 'postgres', 
      host: process.env.DB_HOST || 'faith-point',
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_NAME || 'faith-point',
      schema: process.env.DB_SCHEMA || 'public',
      logging: true,
    },
  ],
};

export default database;
