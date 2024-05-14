/**
 * @swagger
 * tags:
 *  name: Role
 * description: Role management
 */

/**
 * @swagger
 * path:
 * /role:
 *  post:
 *   tags: [Role]
 *  summary: Create a new role
 * description: Create a new role
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Role'
 * responses:
 * 200:
 * description: Role created successfully
 * 400:
 * description: Bad request
 * 500:
 * description: Server error
 */

/**
 * @swagger
 * path:
 * /role/{id}:
 * put:
 * tags: [Role]
 * summary: Update a role
 * description: Update a role
 * parameters:
 * - in: path
 * name: id
 * required: true
 * schema:
 * type: string
 * description: The role id
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Role'
 * responses:
 * 200:
 * description: Role updated successfully
 * 400:
 * description: Bad request
 * 500:
 * description: Server error
 */

/**
 * @swagger
 * path:
 * /role/{id}:
 * delete:
 * tags: [Role]
 * summary: Delete a role
 * description: Delete a role
 * parameters:
 * - in: path
 * name: id
 * required: true
 * schema:
 * type: string
 * description: The role id
 * responses:
 * 200:
 * description: Role deleted successfully
 * 400:
 * description: Bad request
 * 500:
 * description: Server error
 */

/**
 * @swagger
 * path:
 * /role:
 * get:
 * tags: [Role]
 * summary: Get all roles
 * description: Get all roles
 * responses:
 * 200:
 * description: All roles returned
 * 400:
 * description: Bad request
 * 500:
 * description: Server error
 */

/**
 * @swagger
 * path:
 * /role/{id}:
 * get:
 * tags: [Role]
 * summary: Get role by id
 * description: Get role by id
 * parameters:
 * - in: path
 * name: id
 * required: true
 * schema:
 * type: string
 * description: The role id
 * responses:
 * 200:
 * description: Role returned by id
 * 400:
 * description: Bad request
 * 500:
 * description: Server error
 */

/**
 * @swagger
 * path:
 * /role:
 * post:
 * tags: [Role]
 * summary: Get role by role
 * description: Get role by role
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Role'
 * responses:
 * 200:
 * description: Role returned by role
 * 400:
 * description: Bad request
 * 500:
 * description: Server error
 */
