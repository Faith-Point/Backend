/**
 * @swagger
 * tags:
 *   name: FaithPoint
 *   description: FaithPoint management
 */

// Post a new faith point

/**
 * @swagger
 * path:
 *   /faithPoint:
 *     post:
 *       tags: [FaithPoint]
 *       summary: Create a new faith point
 *       description: Create a new faith point
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FaithPoint'
 *       responses:
 *         200:
 *           description: Faith point created successfully
 *         400:
 *           description: Bad request
 *         500:
 *           description: Server error
 */

// Update a faith point

/**
 * @swagger
 * path:
 *   /faithPoint/{id}:
 *     put:
 *       tags: [FaithPoint]
 *       summary: Update a faith point
 *       description: Update a faith point
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: The faith point id
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FaithPoint'
 *       responses:
 *         200:
 *           description: Faith point updated successfully
 *         400:
 *           description: Bad request
 *         500:
 *           description: Server error
 */

// Delete a faith point

/**
 * @swagger
 * path:
 *   /faithPoint/{id}:
 *     delete:
 *       tags: [FaithPoint]
 *       summary: Delete a faith point
 *       description: Delete a faith point
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: The faith point id
 *       responses:
 *         200:
 *           description: Faith point deleted successfully
 *         400:
 *           description: Bad request
 *         500:
 *           description: Server error
 */

// Find all faith points

/**
 * @swagger
 * path:
 *   /faithPoint:
 *     get:
 *       tags: [FaithPoint]
 *       summary: Find all faith points
 *       description: Find all faith points
 *       responses:
 *         200:
 *           description: All faith points returned
 *         400:
 *           description: Bad request
 *         500:
 *           description: Server error
 */

// Find faith point by id

/**
 * @swagger
 * path:
 *   /faithPoint/{id}:
 *     get:
 *       tags: [FaithPoint]
 *       summary: Find faith point by id
 *       description: Find faith point by id
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: The faith point id
 *       responses:
 *         200:
 *           description: Faith point returned by id
 *         400:
 *           description: Bad request
 *         500:
 *           description: Server error
 */

// Find faith point by name

/**
 * @swagger
 * path:
 *   /faithPoint/name/{name}:
 *     get:
 *       tags: [FaithPoint]
 *       summary: Find faith point by name
 *       description: Find faith point by name
 *       parameters:
 *         - in: path
 *           name: name
 *           required: true
 *           schema:
 *             type: string
 *           description: The faith point name
 *       responses:
 *         200:
 *           description: Faith point returned by name
 *         400:
 *           description: Bad request
 *         500:
 *           description: Server error
 */

// Find faith point by religion

/**
 * @swagger
 * path:
 *   /faithPoint/religion/{religion}:
 *     get:
 *       tags: [FaithPoint]
 *       summary: Find faith point by religion
 *       description: Find faith point by religion
 *       parameters:
 *         - in: path
 *           name: religion
 *           required: true
 *           schema:
 *             type: string
 *           description: The faith point religion
 *       responses:
 *         200:
 *           description: Faith point returned by religion
 *         400:
 *           description: Bad request
 *         500:
 *           description: Server error
 */
