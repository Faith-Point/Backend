import 'dotenv/config';

const database = {
  connections: [
    {
      name: 'default',
      type: process.env.DB_TYPE, 
      host: process.env.DB_HOST, 
      database: process.env.DB_NAME,
      port: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      schema: process.env.DB_SCHEMA,
      synchronize: true,
      debug: true,
    },
  ],
};

export default database;
