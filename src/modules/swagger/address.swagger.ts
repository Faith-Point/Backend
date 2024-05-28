/**
 * @swagger
 * tags:
 *   name: Address
 *   description: Address management
 */

// Post a new address

/**
 * @swagger
 * path:
 * /address:
 *   post:
 *     tags: [Address]
 *     summary: Create a new address
 *     description: Create a new address
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Address'
 *     responses:
 *       200:
 *         description: Address created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Update a address

/**
 * @swagger
 * path:
 * /address/{id}:
 *   put:
 *     tags: [Address]
 *     summary: Update a address
 *     description: Update a address
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The address id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Address'
 *     responses:
 *       200:
 *         description: Address updated successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Delete a address

/**
 * @swagger
 * path:
 * /address/{id}:
 *   delete:
 *     tags: [Address]
 *     summary: Delete a address
 *     description: Delete a address
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The address id
 *     responses:
 *       200:
 *         description: Address deleted successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Find all addresses

/**
 * @swagger
 * path:
 * /address:
 *   get:
 *     tags: [Address]
 *     summary: Find all addresses
 *     description: Find all addresses
 *     responses:
 *       200:
 *         description: Address list
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Find address by id

/**
 * @swagger
 * path:
 * /address/{id}:
 *   get:
 *     tags: [Address]
 *     summary: Find address by id
 *     description: Find address by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The address id
 *     responses:
 *       200:
 *         description: Address found successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Find address by city

/**
 * @swagger
 * path:
 * /address/findByCity:
 *   get:
 *     tags: [Address]
 *     summary: Find address by city
 *     description: Find address by city
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The city id
 *     responses:
 *       200:
 *         description: Address found successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */