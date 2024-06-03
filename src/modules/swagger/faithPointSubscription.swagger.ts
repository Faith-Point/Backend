/**
 * @swagger
 * tags:
 *   name: Faith Point Subscription
 *   description: Faith Point Subscription management
 */

// Post a new faith point subscription

/**
 * @swagger
 * path:
 * /faithpointSubscription:
 *   post:
 *     tags: [Faith Point Subscription]
 *     summary: Create a new faith point subscription
 *     description: Create a new faith point subscription
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FaithPointSubscription'
 *     responses:
 *       200:
 *         description: Faith Point Subscription created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Update a faith point subscription

/**
 * @swagger
 * path:
 * /faithpointSubscription/{id}:
 *   put:
 *     tags: [Faith Point Subscription]
 *     summary: Update a faith point subscription
 *     description: Update a faith point subscription
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The faith point subscription id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FaithPointSubscription'
 *     responses:
 *       200:
 *         description: Faith Point Subscription updated successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Delete a faith point subscription

/**
 * @swagger
 * path:
 * /faithpointSubscription/{id}:
 *   delete:
 *     tags: [Faith Point Subscription]
 *     summary: Delete a faith point subscription
 *     description: Delete a faith point subscription
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The faith point subscription id
 *     responses:
 *       200:
 *         description: Faith Point Subscription deleted successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Find all faith point subscription

/**
 * @swagger
 * path:
 * /faithpointSubscription:
 *   get:
 *     tags: [Faith Point Subscription]
 *     summary: Find all faith point subscription
 *     description: Find all faith point subscription
 *     responses:
 *       200:
 *         description: All faith point subscription returned
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Find faith point subscription by id

/**
 * @swagger
 * path:
 * /faithpointSubscription/{id}:
 *   get:
 *     tags: [Faith Point Subscription]
 *     summary: Find faith point subscription by id
 *     description: Find faith point subscription by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The faith point subscription id
 *     responses:
 *       200:
 *         description: Faith Point Subscription returned by id
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Find faith point subscription by faith point id

/**
 * @swagger
 * path:
 * /faithpointSubscription/findByFaithPointId:
 *   post:
 *     tags: [Faith Point Subscription]
 *     summary: Find faith point subscription by faith point id
 *     description: Find faith point subscription by faith point id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FaithPointSubscription'
 *     responses:
 *       200:
 *         description: Faith Point Subscription returned by faith point id
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

