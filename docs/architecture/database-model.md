# Database Model

This section provides an overview of the database schema for the Faith Point system. The system uses a relational database management system (RDBMS) to store data, with the following tables:

### Country

The `Country` table stores information about countries

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id          | UUID      | Primary key |
| short_name  | VARCHAR(50) | Short Name of the country |
| long_name   | VARCHAR(100) | Long Name of the country |
| code        | VARCHAR(10) | Code of the country |
| created_at  | TIMESTAMP | Creation timestamp |
| updated_at  | TIMESTAMP | Last update timestamp |
| deleted_at  | TIMESTAMP | Last deleted timestamp |

### State

The `State` table stores information about states

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id          | UUID      | Primary key |
| country_id  | UUID      | Foreign key to `Country` table |
| short_name  | VARCHAR(50) | Short name of the state |
| long_name   | VARCHAR(100) | Long name of the state |
| code        | VARCHAR(10) | Code of the state |
| created_at  | TIMESTAMP | Creation timestamp |
| updated_at  | TIMESTAMP | Last update timestamp |
| deleted_at  | TIMESTAMP | Last deleted timestamp |

### City

The `City` table stores information about cities

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id          | UUID      | Primary key |
| state_id    | UUID      | Foreign key to `State` table |
| short_name  | VARCHAR(50) | Short name of the city |
| long_name   | VARCHAR(100) | Long name of the city |
| code        | VARCHAR(10) | Code of the city |
| created_at  | TIMESTAMP | Creation timestamp |
| updated_at  | TIMESTAMP | Last update timestamp |
| deleted_at  | TIMESTAMP | Last deleted timestamp |

### Address

The `Address` table stores information about addresses

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id          | UUID      | Primary key |
| city_id     | UUID      | Foreign key to `City` table |
| street      | VARCHAR(100) | Street name |
| number      | VARCHAR(10) | Street number |
| complement  | VARCHAR(50) | Complement to address |
| neighborhood| VARCHAR(50) | Neighborhood |
| created_at  | TIMESTAMP | Creation timestamp |
| updated_at  | TIMESTAMP | Last update timestamp |
| deleted_at  | TIMESTAMP | Last deleted timestamp |

### Role

The `Role` table stores information about user roles

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id          | UUID      | Primary key |
| name        | VARCHAR(50) | Role name |
| created_at  | TIMESTAMP | Creation timestamp |
| updated_at  | TIMESTAMP | Last update timestamp |
| deleted_at  | TIMESTAMP | Last deleted timestamp |

### User

The `User` table stores information about users

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id          | UUID      | Primary key |
| role_id     | UUID      | Foreign key to `Role` table |
| address_id  | UUID      | Foreign key to `Address` table |
| name        | VARCHAR(100) | Name of the user |
| email       | VARCHAR(100) | Email of the user |
| password    | VARCHAR(255) | Password of the user |
| created_at  | TIMESTAMP | Creation timestamp |
| updated_at  | TIMESTAMP | Last update timestamp |
| deleted_at  | TIMESTAMP | Last deleted timestamp |

### Log Exception

The `Log Exception` table stores information about exceptions

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id          | UUID      | Primary key |
| message     | VARCHAR(255) | Exception message |
| code        | TEXT      | Code of the exception |
| type        | TEXT      | Type of the exception |
| stack       | TEXT      | Stack trace of the exception |
| agent       | TEXT      | Agent of the exception |
| ip          | TEXT      | IP of the exception |
| url         | TEXT      | URL of the exception |
| method      | TEXT      | Method of the exception |
| data        | TEXT      | Data of the exception |
| created_at  | TIMESTAMP | Creation timestamp |
| updated_at  | TIMESTAMP | Last update timestamp |
| deleted_at  | TIMESTAMP | Last deleted timestamp |

### Log Auth

The `Log Auth` table stores information about authentication logs

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id          | UUID      | Primary key |
| user_id     | UUID      | Foreign key to `User` table |
| log         | TEXT      | Enum of the authentication |
| ip          | VARCHAR(45) | IP of the user |
| created_at  | TIMESTAMP | Creation timestamp |

### Social Media

The `Social Media` table stores information about social media

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id          | UUID      | Primary key |
| name        | VARCHAR(50) | Name of the social media |
| description | TEXT      | Description of the social media |
| link        | VARCHAR(255) | Link of the social media |
| icon        | VARCHAR(255) | Icon of the social media |
| created_at  | TIMESTAMP | Creation timestamp |
| updated_at  | TIMESTAMP | Last update timestamp |
| deleted_at  | TIMESTAMP | Last deleted timestamp |

### Contact

The `Contact` table stores information about contacts

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id          | UUID      | Primary key |
| name        | VARCHAR(100) | Name of the contact |
| email       | VARCHAR(100) | Email of the contact |
| phone       | VARCHAR(20) | Phone number of the contact |
| created_at  | TIMESTAMP | Creation timestamp |
| updated_at  | TIMESTAMP | Last update timestamp |
| deleted_at  | TIMESTAMP | Last deleted timestamp |

### Religions

The `Religions` table stores information about religions

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id          | UUID      | Primary key |
| name        | VARCHAR(100) | Name of the religion |
| description | TEXT      | Description of the religion |
| created_at  | TIMESTAMP | Creation timestamp |
| updated_at  | TIMESTAMP | Last update timestamp |
| deleted_at  | TIMESTAMP | Last deleted timestamp |

### Faith Point

The `Faith Point` table stores information about faith points

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id          | UUID      | Primary key |
| name        | VARCHAR(100) | Name of the faith point |
| description | TEXT      | Description of the faith point |
| address_id  | UUID      | Foreign key to `Address` table |
| religion_id | UUID      | Foreign key to `Religions` table |
| contact_id  | UUID      | Foreign key to `Contact` table |
| social_media_id | UUID  | Foreign key to `Social Media` table |
| created_at  | TIMESTAMP | Creation timestamp |
| updated_at  | TIMESTAMP | Last update timestamp |
| deleted_at  | TIMESTAMP | Last deleted timestamp |

### Faith Point Image

The `Faith Point Image` table stores information about faith point images

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id          | UUID      | Primary key |
| faith_point_id | UUID  | Foreign key to `Faith Point` table |
| url         | VARCHAR(255) | URL of the image |
| created_at  | TIMESTAMP | Creation timestamp |
| updated_at  | TIMESTAMP | Last update timestamp |
| deleted_at  | TIMESTAMP | Last deleted timestamp |

### Faith Point Schedule

The `Faith Point Schedule` table stores information about faith point schedules

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id          | UUID      | Primary key |
| faith_point_id | UUID  | Foreign key to `Faith Point` table |
| date        | DATE      | Date of the schedule |
| start_time  | TIME      | Start time of the schedule |
| end_time    | TIME      | End time of the schedule |
| created_at  | TIMESTAMP | Creation timestamp |
| updated_at  | TIMESTAMP | Last update timestamp |
| deleted_at  | TIMESTAMP | Last deleted timestamp |

### Faith Point Service

The `Faith Point Service` table stores information about faith point services

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id          | UUID      | Primary key |
| faith_point_id | UUID  | Foreign key to `Faith Point` table |
| name        | VARCHAR(100) | Name of the service |
| description | TEXT      | Description of the service |
| created_at  | TIMESTAMP | Creation timestamp |
| updated_at  | TIMESTAMP | Last update timestamp |
| deleted_at  | TIMESTAMP | Last deleted timestamp |

### Faith Point Subscription

The `Faith Point Subscription` table stores information about faith point subscriptions

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id          | UUID      | Primary key |
| faith_point_id | UUID  | Foreign key to `Faith Point` table |
| user_id     | UUID      | Foreign key to `User` table |
| is_active   | BOOLEAN   | Subscription status |
| created_at  | TIMESTAMP | Creation timestamp |
| updated_at  | TIMESTAMP | Last update timestamp |
| deleted_at  | TIMESTAMP | Last deleted timestamp |

### Faith Point Rating

The `Faith Point Rating` table stores information about faith point ratings

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id          | UUID      | Primary key |
| faith_point_id | UUID  | Foreign key to `Faith Point` table |
| user_id     | UUID      | Foreign key to `User` table |
| rating      | INTEGER   | Rating value |
| comment     | TEXT      | Comment about the rating |
| created_at  | TIMESTAMP | Creation timestamp |
| updated_at  | TIMESTAMP | Last update timestamp |
| deleted_at  | TIMESTAMP | Last deleted timestamp |
