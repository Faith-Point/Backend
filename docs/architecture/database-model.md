# Database Model

This section provides an overview of the database schema for the Faith Point system. The system uses a relational database management system (RDBMS) to store data, with the following tables:

### Users

The `users` table stores information about system users, such as name, email, password (encrypted), and whether the user is an administrator or not.

| Field          | Type         | Description                    | Requeired |
| -------------- | ------------ | ------------------------------ |-----------|
| id             | int(11)      | Unique user ID                 |      ✔️   |
| name           | varchar(255) | User's name                    |      ✔️   |
| email          | varchar(255) | User's email address           |      ✔️   |
| password\_hash | varchar(255) | Hashed password for user login |      ✔️   |
| image\_Url     | varchar(255) | Image to use in users          |           |
| is_admin       | boolean      | Boolean to active admin        |      ✔️   |
| address_id     | int(11)      | Foreign Key to get Address     |           |
| created_at     | datetime     | Creation Date                  |      ✔️   |
| updated_at     | datetime     | If updated                     |           |
| deleted_at     | datetime     | If Deleted, is a soft Delete   |           |

### Faith Points

The `faithPoints` table stores information about registered faith points, such as name, description, address, latitude and longitude, religion, telephone, email, and website.


| Field          | Type         | Description                    | Requeired |
| -------------- | ------------ | ------------------------------ |-----------|
| id             | int(11)      | Unique faith point ID          |      ✔️   |
| name           | varchar(255) | Faith point's name             |      ✔️   |
| description    | text         | Faith point's description      |      ✔️   |
| address_id     | int(11)      | Foreign Key to get Address     |      ✔️   |
| latitude       | varchar(255) | Latitude from faith point      |           |
| longitude      | varchar(255) | Longitude from faith point     |           |
| type_id        | int(11)      | Foreign Key to get Religion    |      ✔️   |
| telephone      | varchar(255) | Telephone from faith point     |           |
| email          | varchar(255) | Email from faith point         |           |
| website        | varchar(255) | Website from faith point       |           |
| created_at     | datetime     | Creation Date                  |      ✔️   |
| updated_at     | datetime     | If updated                     |           |
| deleted_at     | datetime     | If Deleted, is a soft Delete   |           |


### Faith Point Images

The `faithPoints` table stores the images associated with a particular faith point.

| Field          | Type         | Description                    | Requeired |
| -------------- | ------------ | ------------------------------ |-----------|
| id             | int(11)      | Unique image ID                |      ✔️   |
| faith_point_id | int(11)      | Foreign Key to get Faith Point |      ✔️   |
| image_url      | varchar(255) | Image URL from faith point     |           |
| created_at     | datetime     | Creation Date                  |      ✔️   |
| updated_at     | datetime     | If updated                     |           |
| deleted_at     | datetime     | If Deleted, is a soft Delete   |           |

### Faith Point Services

The `faithPointServices` table stores the services offered by the point of faith, such as mass times, and meetings, among others.

| Field          | Type         | Description                    | Requeired |
| -------------- | ------------ | ------------------------------ |-----------|
| id             | int(11)      | Unique service ID              |      ✔️   |
| faith_point_id | int(11)      | Foreign Key to get Faith Point |      ✔️   |
| name           | varchar(255) | Service's name                 |      ✔️   |
| description    | text         | Service's description          |           |
| created_at     | datetime     | Creation Date                  |      ✔️   |
| updated_at     | datetime     | If updated                     |           |
| deleted_at     | datetime     | If Deleted, is a soft Delete   |           |


### Faith Point Schedules

The `faithPointSchedules` table stores the faith point hours of operation broken down by day of the week.

| Field          | Type         | Description                    | Requeired |
| -------------- | ------------ | ------------------------------ |-----------|
| id             | int(11)      | Unique schedule ID             |      ✔️   |
| faith_point_id | int(11)      | Foreign Key to get Faith Point |      ✔️   |
| day_of_week    | int(11)      | Day of week                    |      ✔️   |
| open_time      | time         | Open time                      |      ✔️   |
| close_time     | time         | Close time                     |      ✔️   |
| created_at     | datetime     | Creation Date                  |      ✔️   |
| updated_at     | datetime     | If updated                     |           |
| deleted_at     | datetime     | If Deleted, is a soft Delete   |           |

### Faith Point Subscriptions

The `faithPointSubscriptions` table stores users' subscriptions to specific faith points, with information about the start date, end date, and whether the subscription is active or not.

| Field          | Type         | Description                    | Requeired |
| -------------- | ------------ | ------------------------------ |-----------|
| id             | int(11)      | Unique subscription ID         |      ✔️   |
| faith_point_id | int(11)      | Foreign Key to get Faith Point |      ✔️   |
| user_id        | int(11)      | Foreign Key to get User        |      ✔️   |
| start_date     | datetime     | Start date                     |      ✔️   |
| end_date       | datetime     | End date                       |      ✔️   |
| is_active      | boolean      | Boolean to active subscription |      ✔️   |
| created_at     | datetime     | Creation Date                  |      ✔️   |
| updated_at     | datetime     | If updated                     |           |
| deleted_at     | datetime     | If Deleted, is a soft Delete   |           |

### Ratings

The `Ratings` table stores users' ratings of Faith Points, with information about the score and additional comments.

| Field          | Type         | Description                    | Requeired |
| -------------- | ------------ | ------------------------------ |-----------|
| id             | int(11)      | Unique rating ID               |      ✔️   |
| faith_point_id | int(11)      | Foreign Key to get Faith Point |      ✔️   |
| user_id        | int(11)      | Foreign Key to get User        |      ✔️   |
| score          | int(11)      | Score from rating              |      ✔️   |
| comment        | text         | Comment from rating            |           |
| created_at     | datetime     | Creation Date                  |      ✔️   |
| updated_at     | datetime     | If updated                     |           |
| deleted_at     | datetime     | If Deleted, is a soft Delete   |           |

### Types

The `Types` table stores the religions of the faith points.

| Field          | Type         | Description                    | Requeired |
| -------------- | ------------ | ------------------------------ |-----------|
| id             | int(11)      | Unique type ID                 |      ✔️   |
| name           | varchar(255) | Types's name                   |      ✔️   |
| description    | text         | Religion's description         |           |
| created_at     | datetime     | Creation Date                  |      ✔️   |
| updated_at     | datetime     | If updated                     |           |
| deleted_at     | datetime     | If Deleted, is a soft Delete   |           |

### Country

The `Country` table stores the countries where the faith points are located.

| Field          | Type         | Description                    | Requeired |
| -------------- | ------------ | ------------------------------ |-----------|
| id             | int(11)      | Unique country ID              |      ✔️   |
| short_name     | varchar(255) | Short name from country        |      ✔️   |
| long_name      | varchar(255) | Longe Name from country        |      ✔️   |
| code           | varchar(255) | code from country              |           |
| created_at     | datetime     | Creation Date                  |      ✔️   |
| updated_at     | datetime     | If updated                     |           |
| deleted_at     | datetime     | If Deleted, is a soft Delete   |           |

### State

The `State` table stores the states where the faith points are located.

| Field          | Type         | Description                    | Requeired |
| -------------- | ------------ | ------------------------------ |-----------|
| id             | int(11)      | Unique state ID                |      ✔️   |
| short_name     | varchar(255) | Short name from state          |      ✔️   |
| long_name      | varchar(255) | Longe Name from state          |      ✔️   |
| code           | varchar(255) | code from state                |           |
| country_id     | int(11)      | Foreign Key to get Country     |      ✔️   |
| created_at     | datetime     | Creation Date                  |      ✔️   |
| updated_at     | datetime     | If updated                     |           |
| deleted_at     | datetime     | If Deleted, is a soft Delete   |           |

### City

The `City` table stores the cities where the faith points are located.

| Field          | Type         | Description                    | Requeired |
| -------------- | ------------ | ------------------------------ |-----------|
| id             | int(11)      | Unique city ID                 |      ✔️   |
| short_name     | varchar(255) | Short name from city           |      ✔️   |
| long_name      | varchar(255) | Longe Name from city           |      ✔️   |
| code           | varchar(255) | code from city                 |           |
| state_id       | int(11)      | Foreign Key to get State       |      ✔️   |
| created_at     | datetime     | Creation Date                  |      ✔️   |
| updated_at     | datetime     | If updated                     |           |
| deleted_at     | datetime     | If Deleted, is a soft Delete   |           |

### Address

The `Address` table stores the addresses where the faith points are located.

| Field          | Type         | Description                    | Requeired |
| -------------- | ------------ | ------------------------------ |-----------|
| id             | int(11)      | Unique address ID              |      ✔️   |
| street         | varchar(255) | Street from address            |      ✔️   |
| number         | varchar(255) | Number from address            |      ✔️   |
| complement     | varchar(255) | Complement from address        |           |
| neighborhood   | varchar(255) | Neighborhood from address      |           |
| city_id        | int(11)      | Foreign Key to get City        |      ✔️   |
| created_at     | datetime     | Creation Date                  |      ✔️   |
| updated_at     | datetime     | If updated                     |           |
| deleted_at     | datetime     | If Deleted, is a soft Delete   |           |