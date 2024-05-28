# Configuration

Before running the application, you need to configure the environment variables for each service.

In root directory has a file called `.env.example`, you need to copy this file and rename it to `.env`. if you want to use Docker, its not necessary change any configuration, but if you want to run the application without Docker, you need to change the environment variables.

## Environment Variables
You need in .env file modify the following environment variables:

### API
API_PORT= The port that the API will run

### Database
DB_HOST=localhost
DB_PORT= The port that the database will run
DB_USER= The user of the database
DB_PASS= The password of the database

### Redis
REDIS_HOST=localhost
REDIS_PORT= The port that the redis will run

Ensure that database faith-point is created in your database. If not, you can create it.

## ormconfig.json

In the root directory has a file called `ormconfig.json`, if you want ro run locally, you need to change the host, port, username and password of the database.

```json
{
    "host": "localhost",
    "port": 0000 // Port of the database
    "username": "root", // User of the database
    "password": "root", // Password of the database
}
```

