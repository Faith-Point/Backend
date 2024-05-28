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

```lua {"id":"01HXW63F0YHG505R4F0T7CWR35"}
luaCopy codebackend/
├── src/
│   ├── @types/
│   │   ├── index.d.ts
│   ├── config/
│   │   ├── app.ts
│   │   ├── auth.ts
│   │   ├── bcrypt.ts
│   │   ├── cache.ts
│   │   ├── cors.ts
│   │   ├── data-source.ts
│   │   ├── database.ts
│   │   ├── http.ts
│   │   ├── init-db.sh
│   │   ├── logger.ts
│   │   ├── maskJSONOptions.ts
│   │   ├── swagger.ts
│   │   ├── swaggerComponents.ts
│   ├── modules/
│   │   ├── shared/
│   │   │   ├── module/
│   │   │   │   ├── domain/
│   │   │   │   │   ├── interfaces/
│   │   │   │   │   │   ├── I<nameTable>.ts
│   │   │   │   │   │   ├── ICreate<nameTable>.ts
│   │   │   │   │   │   ├── IFind<nameTable>.ts
│   │   │   │   │   │   ├── IUpdate<nameTable>.ts
│   │   │   │   │   ├── repositories/
│   │   │   │   │   │   ├── I<nameTable>Repository.ts
│   │   │   │   ├── infra/
│   │   │   │   │   ├── container/
│   │   │   │   │   │   ├── index.ts
│   │   │   │   ├── http/
│   │   │   │   ├── services/
│   │   │   │   │   ├── Create<nameTable>Service.ts
│   │   │   │   │   ├── Delete<nameTable>Service.ts
│   │   │   │   │   ├── Find<nameTable>Service.ts
│   │   │   │   │   ├── Update<nameTable>Service.ts
│   │   ├── module/
│   │   │   ├── domain/
│   │   │   │   ├── interfaces/
│   │   │   │   │   ├── I<nameTable>.ts
│   │   │   │   │   ├── ICreate<nameTable>.ts
│   │   │   │   │   ├── IFind<nameTable>.ts
│   │   │   │   │   ├── IUpdate<nameTable>.ts
│   │   │   │   ├── repositories/
│   │   │   │   │   ├── I<nameTable>Repository.ts
│   │   │   │   ├── infra/
│   │   │   │   │   ├── container/
│   │   │   │   │   │   ├── index.ts
│   │   │   │   │   ├── http/
│   │   │   │   │   ├── controllers/
│   │   │   │   │   │   ├── <nameTable>Controller.ts
│   │   │   │   │   ├── routes/
│   │   │   │   │   │   ├── <nameTable>.routes.ts
│   │   │   │   ├── infra/
│   │   │   │   │   ├── Create<nameTable>Service.ts
│   │   │   │   │   ├── Delete<nameTable>Service.ts
│   │   │   │   │   ├── Find<nameTable>Service.ts
│   │   │   │   │   ├── Update<nameTable>Service.ts
│   ├── shared/
│   │   ├── cache/
│   │   │   ├── interfaces/
│   │   │   │   ├── IAuthCache.ts
│   │   │   │   ├── ICacheConfig.ts
│   │   │   ├── CacheConfig.ts
│   │   │   ├── CacheRedis.ts
│   │   ├── container/
│   │   │   ├── index.ts
│   │   ├── database/
│   │   │   ├── typeorm/
│   │   │   │   ├── migrations/
│   │   │   │   │   ├── options/
│   │   │   │   │   │   ├── Table<nameTable>.ts
│   │   │   │   │   ├── Create<nameTable>.ts
│   │   │   │   ├── CreateConnection.ts
│   │   │   │   ├── index.ts
│   │   ├── exceptions/
│   │   │   ├── dictionary/
│   │   │   │   ├── auth/
│   │   │   │   │   ├── index.ts
│   │   │   │   ├── request/
│   │   │   │   │   ├── index.ts
│   │   │   ├── AppError.ts
│   │   │   ├── CelebrateError.ts
│   │   │   ├── Handler.ts
│   │   │   ├── ShowPrettyError.ts
│   │   ├── http/
│   │   │   ├── auth/
│   │   │   │   ├── middleware/
│   │   │   │   │   ├── isAuthenticated.ts
│   │   │   │   │   ├── validateRefreshToken.ts
│   │   │   │   ├── request/
│   │   │   │   │   ├── IRequestLogin.ts
│   │   │   │   ├── response/
│   │   │   │   │   ├── IResponseLogin.ts
│   │   │   │   ├── validator/
│   │   │   │   │   ├── LoginValidate.ts
│   │   │   │   │   ├── RefreshToken.ts
│   │   │   ├── response/
│   │   │   │   ├── interfaces/
│   │   │   │   │   ├── IResponse.ts
│   │   │   │   ├── ApiResponse.ts
│   │   │   │   ├── ErrorResponse.ts
│   │   │   ├── app.ts
│   │   │   ├── importRoutes.ts
│   │   │   ├── routes.ts
│   │   │   ├── server.ts
│   │   ├── logger/
│   │   │   ├── index.ts
│   │   ├── util/
│   │   │   ├── CleanDeep.ts
│   │   │   ├── ConvertShortState.ts
│   │   │   ├── Mask.ts
│   │   │   ├── Password.ts
│   │   │   ├── ShortCountry.ts
│   │   │   ├── ShortState.ts
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
4. Run `yarn add`
5. Run `docker-compose -f docker-compose.develop.yml up --build`
These steps above will start the database, cache, and backend server.

These commands below will create the database and seed it with some initial data, if you want to run manually, follow the steps below:

1. Run `npm run db:migrate`
2. Run `npm run db:seed`
3. Run `npm run start`

If you want to stop the backend, run:

`docker-compose -f docker-compose.develop.yml down`

### Running the API
The API should now be running at [http://localhost:3308](http://localhost:3308/).



#### To Create a new Table or module in project is:

### Initialize by:

1. create in src/shared/database/typeorm/migrations/options `Table<nameTable>.ts`
   2 Run Migration with the name `Create<nameTable>.ts`

### To create a new migration

`yarn typeorm migration:create ./src/shared/database/typeorm/migrations/CreateTableName`.

If you want to run this migration:
1. Run `yarn typeorm migration:run -d ./src/config/data-source.ts`

if you want to revert the migration, run `yarn typeorm migration:revert`


### To create a new module

1. Create a new folder in `src/modules/module`
2. Create a new folder in `src/modules/module/domain`
3. Create a new folder in `src/modules/module/domain/interfaces`
4. Create a new folder in `src/modules/module/domain/repositories`
5. Create a new folder in `src/modules/module/infra`
6. Create a new folder in `src/modules/module/infra/container`
7. Create a new folder in `src/modules/module/infra/http`
8. Create a new folder in `src/modules/module/infra/services`
9. Create a new folder in `src/modules/module/infra/http/controllers`
10. Create a new folder in `src/modules/module/infra/http/routes`
11. Create a new file in `src/modules/module/domain/interfaces/I<nameTable>.ts`
12. Create a new file in `src/modules/module/domain/interfaces/ICreate<nameTable>.ts`
13. Create a new file in `src/modules/module/domain/interfaces/IFind<nameTable>.ts`
14. Create a new file in `src/modules/module/domain/interfaces/IUpdate<nameTable>.ts`
15. Create a new file in `src/modules/module/domain/repositories/I<nameTable>Repository.ts`
16. Create a new file in `src/modules/module/infra/container/index.ts`
17. Create a new file in `src/modules/module/infra/http/controllers/<nameTable>Controller.ts`
18. Create a new file in `src/modules/module/infra/http/routes/<nameTable>.routes.ts`
19. Create a new file in `src/modules/module/infra/services/Create<nameTable>Service.ts`
20. Create a new file in `src/modules/module/infra/services/Delete<nameTable>Service.ts`
21. Create a new file in `src/modules/module/infra/services/Find<nameTable>Service.ts`
22. Create a new file in `src/modules/module/infra/services/Update<nameTable>Service.ts`