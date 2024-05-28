/**
 * @swagger
 * tags:
 *   name: Role
 *   description: Role management
 */


// Post a new role

/**
 * @swagger
 * path:
 * /role:
 *   post:
 *     tags: [Role]
 *     summary: Create a new role
 *     description: Create a new role
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Role'
 *     responses:
 *       200:
 *         description: Role created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Update a role

/**
 * @swagger
 * path:
 * /role/{id}:
 *   put:
 *     tags: [Role]
 *     summary: Update a role
 *     description: Update a role
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The role id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Role'
 *     responses:
 *       200:
 *         description: Role updated successfully
 *       400:
 *         description: Bad request
 */

// Delete a role

/**
 * @swagger
 * path:
 * /role/{id}:
 *   delete:
 *     tags: [Role]
 *     summary: Delete a role
 *     description: Delete a role
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The role id
 *     responses:
 *       200:
 *         description: Role deleted successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Get all roles

/**
 * @swagger
 * path:
 * /role:
 *   get:
 *     tags: [Role]
 *     summary: Get all roles
 *     description: Get all roles
 *     responses:
 *       200:
 *         description: Roles retrieved successfully
 *       500:
 *         description: Server error
 */

// Get a role by id

/**
 * @swagger
 * path:
 * /role/{id}:
 *   get:
 *     tags: [Role]
 *     summary: Get a role by id
 *     description: Get a role by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The role id
 *     responses:
 *       200:
 *         description: Role retrieved successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */
