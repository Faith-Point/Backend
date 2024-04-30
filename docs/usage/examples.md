# Examples

**Create a New User**

To create a new user, make a POST request to the `/api/users` endpoint with the following payload:

```json
jsonCopy code{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```

The API will respond with a `201 Created` status code and the following payload:

```json
jsonCopy code{
  "id": 1,
  "name": "John Doe",
  "email": "johndoe@example.com"
}
```

**Get User Details**

To get the details of a specific user, make a GET request to the `/api/users/:id` endpoint, where `:id` is the ID of the user you want to retrieve.

The API will respond with a `200 OK` status code and the following payload:

```json
jsonCopy code{
  "id": 1,
  "name": "John Doe",
  "email": "johndoe@example.com",
  "createdAt": "2023-04-29T08:32:11.340Z",
  "updatedAt": "2023-04-29T08:32:11.340Z"
}
```

**Update User Details**

To update the details of a specific user, make a PUT request to the `/api/users/:id` endpoint, where `:id` is the ID of the user you want to update, with the following payload:

```json
jsonCopy code{
  "name": "Jane Doe",
  "email": "janedoe@example.com"
}
```

The API will respond with a `200 OK` status code and the updated user details:

```json
jsonCopy code{
  "id": 1,
  "name": "Jane Doe",
  "email": "janedoe@example.com",
  "createdAt": "2023-04-29T08:32:11.340Z",
  "updatedAt": "2023-04-29T09:15:22.123Z"
}
```

**Delete a User**

To delete a specific user, make a DELETE request to the `/api/users/:id` endpoint, where `:id` is the ID of the user you want to delete.

The API will respond with a `204 No Content` status code



**Create Migrations**

To create a new migration, run the following command:

```bash
npm run typeorm migration:create -- -n CreateNameTable
```