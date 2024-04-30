# Api Reference

The following is the API reference for Faith Point:

### Authentication

All API requests require authentication using a bearer token in the `Authorization` header. Tokens can be obtained by authenticating with the `/auth` endpoint.

#### `/auth` (POST)

Authenticate and retrieve an access token.

**Parameters:**

| Name       | Type     | Description                               |
| ---------- | -------- | ----------------------------------------- |
| `username` | `string` | The username of the user to authenticate. |
| `password` | `string` | The password of the user to authenticate. |

**Response:**

```json
jsonCopy code{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  "expires_in": 3600
}
```

#### `/users` (GET)

Retrieve a list of all users.

**Response:**

```json
jsonCopy code[
  {
    "id": "1",
    "username": "johndoe",
    "email": "johndoe@example.com"
  },
  {
    "id": "2",
    "username": "janedoe",
    "email": "janedoe@example.com"
  }
]
```

#### `/users/:id` (GET)

Retrieve a single user by ID.

**Parameters:**

| Name | Type     | Description                     |
| ---- | -------- | ------------------------------- |
| `id` | `string` | The ID of the user to retrieve. |

**Response:**

```json
jsonCopy code{
  "id": "1",
  "username": "johndoe",
  "email": "johndoe@example.com"
}
```

#### `/users` (POST)

Create a new user.

**Parameters:**

| Name       | Type     | Description                        |
| ---------- | -------- | ---------------------------------- |
| `username` | `string` | The username of the new user.      |
| `email`    | `string` | The email address of the new user. |
| `password` | `string` | The password of the new user.      |

**Response:**

```json
jsonCopy code{
  "id": "3",
  "username": "janesmith",
  "email": "janesmith@example.com"
}
```

#### `/users/:id` (PUT)

Update an existing user by ID.

**Parameters:**

| Name       | Type     | Description                         |
| ---------- | -------- | ----------------------------------- |
| `id`       | `string` | The ID of the user to update.       |
| `username` | `string` | The new username for the user.      |
| `email`    | `string` | The new email address for the user. |
| `password` | `string` | The new password for the user.      |

**Response:**

```json
jsonCopy code{
  "id": "1",
  "username": "johndoe",
  "email": "johndoe@example.com"
}
```

#### `/users/:id` (DELETE)

Delete an existing user by ID.

**Parameters:**

| Name | Type     | Description                   |
| ---- | -------- | ----------------------------- |
| `id` | `string` | The ID of the user to delete. |

**Response:**

```json
jsonCopy code{}
```