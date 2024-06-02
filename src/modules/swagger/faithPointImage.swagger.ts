/**
 * @swagger
 * tags:
 *   name: Faith Point Image
 *   description: Faith Point Image management
 */

// Post a new faith point image

/**
 * @swagger
 * path:
 * /faithPoint/Image:
 *   post:
 *     tags: [Faith Point Image]
 *     summary: Create a new faith point image
 *     description: Create a new faith point image
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FaithPointImage'
 *     responses:
 *       200:
 *         description: Faith Point Image created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Update a faith point image

/**
 * @swagger
 * path:
 * /faithPoint/Image/{id}:
 *   put:
 *     tags: [Faith Point Image]
 *     summary: Update a faith point image
 *     description: Update a faith point image
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The faith point image id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FaithPointImage'
 *     responses:
 *       200:
 *         description: Faith Point Image updated successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Delete a faith point image

/**
 * @swagger
 * path:
 * /faithPoint/Image/{id}:
 *   delete:
 *     tags: [Faith Point Image]
 *     summary: Delete a faith point image
 *     description: Delete a faith point image
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The faith point image id
 *     responses:
 *       200:
 *         description: Faith Point Image deleted successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Find all faith point images

/**
 * @swagger
 * path:
 * /faithPoint/Image:
 *   get:
 *     tags: [Faith Point Image]
 *     summary: Find all faith point images
 *     description: Find all faith point images
 *     responses:
 *       200:
 *         description: Faith Point Images found successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Find a faith point image by id

/**
 * @swagger
 * path:
 * /faithPoint/Image/{id}:
 *   get:
 *     tags: [Faith Point Image]
 *     summary: Find all faith point images
 *     description: Find all faith point images
 *     responses:
 *       200:
 *         description: Faith Point Images found successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Find faith point images by faith point id

/**
 * @swagger
 * path:
 * /faithPoint/Image/faithPoint/{id}:
 *   get:
 *     tags: [Faith Point Image]
 *     summary: Find faith point images by faith point id
 *     description: Find faith point images by faith point id
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The faith point id
 *     responses:
 *       200:
 *         description: Faith Point Images found successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */