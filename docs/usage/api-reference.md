# Api Reference

The following is the API reference for Faith Point:

### Authentication

The most of the endpoints require authentication. To authenticate, you need to send a POST request to `/auth` with the following parameters:

- `username`: The username of the user to authenticate.
- `password`: The password of the user to authenticate.

The response will contain an `access_token` that you can use to authenticate subsequent requests.

### Swagger
The API documentation is available at `http://localhost:3308/swagger`.

### Example Requests
Most of the endpoints follow the same pattern. Here are some examples of the endpoints you can use:

- **GET** `/module`: Retrieve a list of all users.
- **GET** `/module/:id`: Retrieve a single user by ID.
- **POST** `/module`: Create a new user.
- **PUT** `/module/:id`: Update an existing user by ID.
- **DELETE** `/module/:id`: Delete an existing user by ID.

### Endpoints

#### `/auth`
#### `/users`
#### `/roles`
#### `/LogAuth`
#### `/LogException`
#### `/Country`
#### `/State`
#### `/City`
#### `/Address`
