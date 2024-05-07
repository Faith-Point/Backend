# Configuration

Before running the application, you need to configure the environment variables for each service.

1. Database:

The database service can be configured through the following environment variables:

* `DB_HOST`: The hostname of the database server. Defaults to `localhost`.
* `DB_PORT`: The port number of the database server. Defaults to `5432`.
* `DB_NAME`: The name of the database. Defaults to `Faith Point`.
* `DB_USER`: The username used to authenticate with the database server. Defaults to `Faith Point`.
* `DB_PASSWORD`: The password used to authenticate with the database server. Defaults to `password`.

You can modify these variables by editing the `.env` file located in the `backend` folder.

2. Redis:

The Redis service can be configured through the following environment variables:

* `REDIS_HOST`: The hostname of the Redis server. Defaults to `localhost`.
* `REDIS_PORT`: The port number of the Redis server. Defaults to `6379`.

You can modify these variables by editing the `.env` file located in the `backend` folder.

3. Application:

The application can be configured through the following environment variables:

* `PORT`: The port number on which the application will listen for incoming requests. Defaults to `3000`.
* `NODE_ENV`: The environment in which the application is running. Defaults to `development`.

You can modify these variables by editing the `.env` file located in the root folder of the project.

After configuring the environment variables, you can start the application by running the following commands:

```bash
bashCopy codecd backend
npm install
npm start
```

This will start the application on the port specified in the environment variables. You can access the application by opening a web browser and navigating to `http://localhost:<PORT>` (where `<PORT>` is the port number specified in the environment variables)