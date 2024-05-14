/**
 * @swagger
 * path:
 * /user:
 *  get:
 *   tags: [User]
 *  summary: Get all users
 * description: Get all users
 * responses:
 * 200:
 * description: A list of users
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * $ref: '#/components/schemas/User'
 * 500:
 * description: Server error
 * */

/**
 * @swagger
 * path:
 * /user/{id}:
 * get:
 *  tags: [User]
 * summary: Get a user by ID
 * description: Get a user by ID
 * parameters:
 * - in: path
 * name: id
 * required: true
 * schema:
 * type: string
 * description: The user id
 * responses:
 * 200:
 * description: User details
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/User'
 * 400:
 * description: Bad request
 * 500:
 * description: Server error
 * */

/**
 * @swagger
 * path:
 * /user/findByName:
 * get:
 * tags: [User]
 * summary: Get a user by name
 * description: Get a user by name
 * parameters:
 * - in: query
 * name: name
 * required: true
 * schema:
 * type: string
 * description: The user name
 * responses:
 * 200:
 * description: User details
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * $ref: '#/components/schemas/User'
 * 400:
 * description: Bad request
 * 500:
 * description: Server error
 * */

/**
 * @swagger
 * path:
 * /user/findByEmail:
 * get:
 * tags: [User]
 * summary: Get a user by email
 * description: Get a user by email
 * parameters:
 * - in: query
 * name: email
 * required: true
 * schema:
 * type: string
 * description: The user email
 * responses:
 * 200:
 * description: User details
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/User'
 * 400:
 * description: Bad request
 * 500:
 * description: Server error
 * */

/**
 * @swagger
 * path:
 * /user/findByRole:
 * get:
 * tags: [User]
 * summary: Get users by role
 * description: Get users by role
 * parameters:
 * - in: query
 * name: role
 * required: true
 * schema:
 * type: string
 * description: The user role
 * responses:
 * 200:
 * description: List of users
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * $ref: '#/components/schemas/User'
 * 400:
 * description: Bad request
 * 500:
 * description: Server error
 * */

/**
 * @swagger
 * path:
 * /user:
 * post:
 * tags: [User]
 * summary: Create a new user
 * description: Create a new user
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/User'
 * responses:
 * 201:
 * description: User created
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/User'
 * 400:
 * description: Bad request
 * 500:
 * description: Server error
 * */

/**
 * @swagger
 * path:
 * /user/{id}:
 * put:
 * tags: [User]
 * summary: Update a user by ID
 *  description: Update a user by ID
 * parameters:
 * - in: path
 * name: id
 * required: true
 * schema:
 * type: string
 * description: The user id
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/User'
 * responses:
 * 200:
 *  description: User updated
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/User'
 * 400:
 * description: Bad request
 * 500:
 * description: Server error
 * */


/**
 * @swagger
 * path:
 * /user/{id}:
 * delete:
 * tags: [User]
 * summary: Delete a user by ID
 * description: Delete a user by ID
 * parameters:
 * - in: path
 * name: id
 * required: true
 *  schema:
 * type: string
 * description: The user id
 * responses:
 * 200:
 * description: User deleted
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/User'
 * 400:
 * description: Bad request
 * 500:
 * description: Server error
 *  */

/**
 * @swagger
 * tags:
 * name: User
 * description: User management
 * */