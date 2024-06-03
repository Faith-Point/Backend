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
 * /faithPoint:
 *   post:
 *     tags: [FaithPoint]
 *     summary: Create a new faithPoint
 *     description: Create a new faithPoint
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FaithPoint'
 *     responses:
 *       200:
 *         description: FaithPoint created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Update a faith point

/**
 * @swagger
 * path:
 * /faithPoint/{id}:
 *   put:
 *     tags: [FaithPoint]
 *     summary: Update a faith point
 *     description: Update a faith point
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The faithPoint id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FaithPoint'
 *     responses:
 *       200:
 *         description: Faith Point updated successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Delete a faith point

/**
 * @swagger
 * path:
 * /faithPoint/{id}:
 *   delete:
 *     tags: [FaithPoint]
 *     summary: Delete a faith point
 *     description: Delete a faith point
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The fa id
 *     responses:
 *       200:
 *         description: Faith Point deleted successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Find all faith points

/**
 * @swagger
 * path:
 * /faithPoint:
 *   get:
 *     tags: [FaithPoint]
 *     summary: Find all faith points
 *     description: Find all faith points
 *     responses:
 *       200:
 *         description: FaithPoint list
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Find faith point by id

/**
 * @swagger
 * path:
 * /faithPoint/{id}:
 *   get:
 *     tags: [FaithPoint]
 *     summary: Find faithPoint by id
 *     description: Find faithPoint by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The faithPoint id
 *     responses:
 *       200:
 *         description: FaithPoint found successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Find faith point by name

/**
 * @swagger
 * path:
 * /faithPoint/findByName:
 *   get:
 *     tags: [FaithPoint]
 *     summary: Find faithPoint by name
 *     description: Find faithPoint by name
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The faithPoint name
 *     responses:
 *       200:
 *         description: FaithPoint found successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Find faith point by religion

/**
 * @swagger
 * path:
 * /faithPoint/findByReligion:
 *   get:
 *     tags: [FaithPoint]
 *     summary: Find faithPoint by religion
 *     description: Find faithPoint by religion
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The faithPoint religion
 *     responses:
 *       200:
 *         description: FaithPoint found successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */
