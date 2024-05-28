# Database Model

This section provides an overview of the database schema for the Faith Point system. The system uses a relational database management system (RDBMS) to store data, with the following tables:

### Country

The `Country` table stores information about countries

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id          | UUID      | Primary key |
| short_name        | VARCHAR   | Short Name of the country |
| long_name         | VARCHAR   | Long Name of the country |
| code          | VARCHAR   | Code of the country |
| created_at   | TIMESTAMP | Creation timestamp |
| updated_at   | TIMESTAMP | Last update timestamp |
| deleted_at   | TIMESTAMP | Last deleted timestamp |

### State

The `State` table stores information about states

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id          | UUID      | Primary key |
| country_id  | UUID      | Foreign key to `Country` table |
| short_name        | VARCHAR   | short name of the state |
| long_name         | VARCHAR   | long name of the state |
| code          | VARCHAR   | code of the state |
| created_at   | TIMESTAMP | Creation timestamp |
| updated_at   | TIMESTAMP | Last update timestamp |
| deleted_at   | TIMESTAMP | Last deleted timestamp |

### City

The `City` table stores information about cities

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id          | UUID      | Primary key |
| state_id    | UUID      | Foreign key to `State` table |
| short_name        | VARCHAR   | short name of the city |
| long_name         | VARCHAR   | long name of the city |
| code          | VARCHAR   | code of the city |
| created_at   | TIMESTAMP | Creation timestamp |
| updated_at   | TIMESTAMP | Last update timestamp |
| deleted_at   | TIMESTAMP | Last deleted timestamp |

### Address

The `Address` table stores information about addresses

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id          | UUID      | Primary key |
| city_id     | UUID      | Foreign key to `City` table |
| street      | VARCHAR   | Street name |
| number      | VARCHAR   | Street number |
| complement | VARCHAR   | complement to address |
| neighborhood    | VARCHAR   | neighborhood |
| created_at   | TIMESTAMP | Creation timestamp |
| updated_at   | TIMESTAMP | Last update timestamp |
| deleted_at   | TIMESTAMP | Last deleted timestamp |

### Role

The `Role` table stores information about user roles

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id          | UUID      | Primary key |
| name        | VARCHAR   | Role name |
| created_at   | TIMESTAMP | Creation timestamp |
| updated_at   | TIMESTAMP | Last update timestamp |
| deleted_at   | TIMESTAMP | Last deleted timestamp |

### User

The `User` table stores information about users

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id          | UUID      | Primary key |
| role_id     | UUID      | Foreign key to `Role` table |
| address_id     | UUID      | Foreign key to `Address` table |
| name  | VARCHAR   | Name of the user |
| email | VARCHAR   | Email of the user |
| password | VARCHAR   | Password of the user |
| created_at   | TIMESTAMP | Creation timestamp |
| updated_at   | TIMESTAMP | Last update timestamp |
| deleted_at   | TIMESTAMP | Last deleted timestamp |

### Log Exception

The `Log Exception` table stores information about exceptions

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id          | UUID      | Primary key |
| message     | VARCHAR   | Exception message |
| code | TEXT      | code of the exception |
| type | TEXT      | stype of the exception |
| stack | TEXT      | stack of the exception |
| agent | TEXT      | agent of the exception |
| ip | TEXT      | i[] of the exception |
| url | TEXT      | url of the exception |
| method | TEXT      | method of the exception |
| data | TEXT      | data of the exception |
| created_at   | TIMESTAMP | Creation timestamp |
| updated_at   | TIMESTAMP | Last update timestamp |
| deleted_at   | TIMESTAMP | Last deleted timestamp |

### Log Auth

The `Log Auth` table stores information about authentication logs

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id          | UUID      | Primary key |
| user_id     | UUID      | Foreign key to `User` table |
| log | TEXT      | enum of the authentication |
| created_at   | TIMESTAMP | Creation timestamp |


