/**
 * @swagger
 * tags:
 *   name: Address
 *   description: Address management
 */

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

/**
 * @swagger
 * path:
 * /address/{id}:
 *   put:
 *     tags: [Address]
 *     summary: Update an address
 *     description: Update an address
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

/**
 * @swagger
 * path:
 * /address/{id}:
 *   delete:
 *     tags: [Address]
 *     summary: Delete an address
 *     description: Delete an address
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

/**
 * @swagger
 * path:
 * /address:
 *   get:
 *     tags: [Address]
 *     summary: Get all addresses
 *     description: Get all addresses
 *     responses:
 *       200:
 *         description: A list of addresses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Address'
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * path:
 * /address/{id}:
 *   get:
 *     tags: [Address]
 *     summary: Get an address by ID
 *     description: Get an address by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The address id
 *     responses:
 *       200:
 *         description: Address details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Address'
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * path:
 * /address/findByCity:
 *   get:
 *     tags: [Address]
 *     summary: Get addresses by city
 *     description: Get addresses by city
 *     parameters:
 *       - in: query
 *         name: city
 *         required: true
 *         schema:
 *           type: string
 *         description: The city id
 *     responses:
 *       200:
 *         description: List of addresses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Address'
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */
