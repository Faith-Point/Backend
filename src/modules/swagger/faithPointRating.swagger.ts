/**
 * @swagger
 * tags:
 *   name: FaithPointRating
 *   description: FaithPointRating management
 */

// Post a new faithPointRating

/**
 * @swagger
 * path:
 * /faithPointRating:
 *   post:
 *     tags: [FaithPointRating]
 *     summary: Create a new faithPointRating
 *     description: Create a new faithPointRating
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FaithPointRating'
 *     responses:
 *       200:
 *         description: FaithPointRating created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Update a faithPointRating

/**
 * @swagger
 * path:
 * /faithPointRating/{id}:
 *   put:
 *     tags: [FaithPointRating]
 *     summary: Update a faithPointRating
 *     description: Update a faithPointRating
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The faithPointRating id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FaithPointRating'
 *     responses:
 *       200:
 *         description: FaithPointRating updated successfully
 *       400:
 *         description: Bad request
 */

// Delete a faithPointRating

/**
 * @swagger
 * path:
 * /faithPointRating/{id}:
 *   delete:
 *     tags: [FaithPointRating]
 *     summary: Delete a faithPointRating
 *     description: Delete a faithPointRating
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The faithPointRating id
 *     responses:
 *       200:
 *         description: FaithPointRating deleted successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Get all faithPointRating

/**
 * @swagger
 * path:
 * /faithPointRating:
 *   get:
 *     tags: [FaithPointRating]
 *     summary: Get all faithPointRating
 *     description: Get all faithPointRating
 *     responses:
 *       200:
 *         description: All faith point rating returned
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Get faithPointRating by id

/**
 * @swagger
 * path:
 * /faithPointRating/{id}:
 *   get:
 *     tags: [FaithPointRating]
 *     summary: Get faithPointRating by id
 *     description: Get faithPointRating by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The faithPointRating id
 *     responses:
 *       200:
 *         description: FaithPointRating returned by id
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Get faithPointRating by faithPoint

/**
 * @swagger
 * path:
 * /faithPointRating/findByFaithPoint:
 *   get:
 *     tags: [FaithPointRating]
 *     summary: Get faithPointRating by faithPoint
 *     description: Get faithPointRating by faithPoint
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The faithPointRating id
 *     responses:
 *       200:
 *         description: FaithPointRating returned by id
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Get faithPointRating by user

/**
 * @swagger
 * path:
 * /faithPointRating/findByUser:
 *   get:
 *     tags: [FaithPointRating]
 *     summary: Get faithPointRating by user
 *     description: Get faithPointRating by user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The faithPointRating id
 *     responses:
 *       200:
 *         description: FaithPointRating returned by id
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Get faithPointRating by rating

/**
 * @swagger
 * path:
 * /faithPointRating/findByRating:
 *   get:
 *     tags: [FaithPointRating]
 *     summary: Get faithPointRating by rating
 *     description: Get faithPointRating by rating
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The faithPointRating id
 *     responses:
 *       200:
 *         description: FaithPointRating returned by id
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */
