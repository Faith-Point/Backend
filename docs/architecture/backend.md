# Backend

The backend of the Faith Point system is built with Node.js, Typescript, Docker, and Redis.

### Overview

The backend consists of three main components: the API, the database, and the cache.

#### API

The API is built with Node.js and Typescript. It exposes a RESTful interface for the frontend to interact with. It communicates with the database and cache to retrieve and store data.

#### Database

The database is a PostgreSQL instance running in a Docker container. It stores all of the system's data, including user information, courses, exams, and grades.

#### Cache

The cache is a Redis instance running in a Docker container. It is used to improve the performance of the system by caching frequently accessed data.

### Folder structure

```lua
luaCopy codebackend/
├── src/
│   ├── api/
│   │   ├── controllers/
│   │   ├── routes/
│   │   └── index.ts
│   ├── config/
│   ├── db/
│   │   ├── migrations/
│   │   ├── seeds/
│   │   └── index.ts
│   ├── models/
│   ├── cache/
│   │   └── index.ts
│   └── index.ts
├── Dockerfile
├── docker-compose.yml
├── tsconfig.json
└── package.json
```

### Dependencies

The backend has the following dependencies:

* Node.js v14 or later
* Docker
* Docker Compose

### Installation

To install the backend, follow these steps:

1. Clone the repository
2. Navigate to the "backend" directory
3. Run `npm install`
4. Run `docker-compose up -d`
5. Run `npm run db:migrate`
6. Run `npm run db:seed`
7. Run `npm run start`

The API should now be running at [http://localhost:8080](http://localhost:8080/).

#### To Create a new Table or module in project is:
### Initialize by:

1. create in src/shared/database/typeorm/migrations/options `Table<nameTable>.ts`
2 Run Migration with the name `Create<nameTable>.ts`

### To create a new migration

1. Run `yarn typeorm migration:create -n <migration name>`
2. Write the migration in the generated file
3. Run `yarn typeorm migration:run`

if you want to revert the migration, run `yarn typeorm migration:revert`


### After create module in src/modules with table name