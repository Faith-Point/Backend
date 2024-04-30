import 'dotenv/config';

const database = {
  connections: [
    {
      name: 'default',
      type: process.env.FAITHPOINT_TYPE || 'postgres',
      host: process.env.FAITHPOINT_HOST || 'localhost',
      database: process.env.FAITHPOINT_DATABASE || 'faith-point',
      port: process.env.FAITHPOINT_PORT || 5432,
      username: process.env.FAITHPOINT_USERNAME || 'postgres',
      password: process.env.FAITHPOINT_PASSWORD || 'postgres',
      schema: process.env.FAITHPOINT_SCHEMA || 'public',
      synchronize: true,
      debug: true,
    },
  ],
};

export default database;
