# Examples

If you want to send request for example in postman, you need to send a POST request to `http://localhost:3308/auth/login` with the following parameters, in the body of the request:

```json
{
    "username": "your-username",
    "password": "your-password"
}
```

The response will contain an `access_token` that you can use to authenticate subsequent requests.

### Other Endpoints

Most of the endpoints follow the same pattern. Some of the modules have more endpoints, but the most of them have the following endpoints:

- **GET** `http://localhost:3308/module`: Retrieve a list of all users, and its not necessary nothing in the body of the request.
- **GET** `http://localhost:3308/module/:id`: Retrieve a single user by ID, and this endpoint need the ID of the user in the URL.
- **POST** `http://localhost:3308/module`: Create a new user, and you need to send the user in the body of the request like that(its necessary verify your module and the fields that you need to send):
```json
{
    "name": "your-name",
    "email": "your-email",
    "password": "your-password"
}
```
- **PUT** `http://localhost:3308/module/:id`: Update an existing user by ID, and you need to send the id in the URL and the fields that you want to update in the body of the request:
```json
{
    "name": "your-name",
    "email": "your-email",
    "password": "your-password"
}
```
- **DELETE** `http://localhost:3308/module/:id`: Delete an existing user by ID, and you need to send the id in the URL.