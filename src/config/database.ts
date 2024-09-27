import 'dotenv/config';

const database = {
  connections: [
    {
      name: process.env.DB_NAME,
      type: process.env.DB_TYPE, 
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      schema: process.env.DB_SCHEMA,
      logging: process.env.NODE_ENV === 'development' ? true : false,
    },
  ],
};

export default database;
