/**
 * @swagger
 * tags:
 *   name: FaithPointService
 *   description: FaithPointService management
 */

// Post a new faithPointService

/**
 * @swagger
 * path:
 * /faithPointService:
 *   post:
 *     tags: [FaithPointService]
 *     summary: Create a new faithPointService
 *     description: Create a new faithPointService
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FaithPointService'
 *     responses:
 *       200:
 *         description: FaithPointService created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Update a faithPointService

/**
 * @swagger
 * path:
 * /faithPointService/{id}:
 *   put:
 *     tags: [FaithPointService]
 *     summary: Update a faithPointService
 *     description: Update a faithPointService
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The faithPointService id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FaithPointService'
 *     responses:
 *       200:
 *         description: FaithPointService updated successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Delete faithPointServices

/**
 * @swagger
 * path:
 * /faithPointService/{id}:
 *   delete:
 *     tags: [FaithPointService]
 *     summary: Delete a faithPointService
 *     description: Delete a faithPointService
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The faithPointService id
 *     responses:
 *       200:
 *         description: FaithPointService deleted successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Get all faithPointServices

/**
 * @swagger
 * path:
 * /faithPointService:
 *   get:
 *     tags: [FaithPointService]
 *     summary: Get all faithPointServices
 *     description: Get all faithPointServices
 *     responses:
 *       200:
 *         description: FaithPointServices retrieved successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Get faithPointService by id

/**
 * @swagger
 * path:
 * /faithPointService/{id}:
 *   get:
 *     tags: [FaithPointService]
 *     summary: Get a faithPointService by id
 *     description: Get a faithPointService by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The faithPointService id
 *     responses:
 *       200:
 *         description: FaithPointService retrieved successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Get faithPointService by name

/**
 * @swagger
 * path:
 * /faithPointService/name/{name}:
 *   get:
 *     tags: [FaithPointService]
 *     summary: Get a faithPointService by name
 *     description: Get a faithPointService by name
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: The faithPointService name
 *     responses:
 *       200:
 *         description: FaithPointService retrieved successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Get faithPointService by faithPoint

/**
 * @swagger
 * path:
 * /faithPointService/faithPoint/{faithPoint}:
 *   get:
 *     tags: [FaithPointService]
 *     summary: Get a faithPointService by faithPoint
 *     description: Get a faithPointService by faithPoint
 *     parameters:
 *       - in: path
 *         name: faithPoint
 *         required: true
 *         schema:
 *           type: string
 *         description: The faithPointService faithPoint
 *     responses:
 *       200:
 *         description: FaithPointService retrieved successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */