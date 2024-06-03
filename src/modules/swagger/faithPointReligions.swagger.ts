/**
 * @swagger
 * tags:
 *  name: FaithPointReligions
 *  description: FaithPointReligions management
 */

// Post a new faithPointReligion

/**
 * @swagger
 * path:
 * /faithPointReligions:
 *   post:
 *     tags: [FaithPointReligions]
 *     summary: Create a new faithPointReligion
 *     description: Create a new faithPointReligion
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FaithPointReligions'
 *     responses:
 *       200:
 *         description: FaithPointReligions created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Update a faithPointReligion

/**
 * @swagger
 * path:
 * /faithPointReligions/{id}:
 *   put:
 *     tags: [FaithPointReligions]
 *     summary: Update a faithPointReligion
 *     description: Update a faithPointReligion
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The faithPointReligion id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FaithPointReligions'
 *     responses:
 *       200:
 *         description: FaithPointReligions updated successfully
 *       400:
 *         description: Bad request
 */

// Delete a faithPointReligion

/**
 * @swagger
 * path:
 * /faithPointReligions/{id}:
 *   delete:
 *     tags: [FaithPointReligions]
 *     summary: Delete a faithPointReligion
 *     description: Delete a faithPointReligion
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The faithPointReligion id
 *     responses:
 *       200:
 *         description: FaithPointReligions deleted successfully
 *       400:
 *         description: Bad request
 */

// Get all faithPointReligions

/**
 * @swagger
 * path:
 * /faithPointReligions:
 *   get:
 *     tags: [FaithPointReligions]
 *     summary: Get all faithPointReligions
 *     description: Get all faithPointReligions
 *     responses:
 *       200:
 *         description: FaithPointReligions returned successfully
 *       400:
 *         description: Bad request
 */

// Get faithPointReligion by id

/**
 * @swagger
 * path:
 * /faithPointReligions/{id}:
 *   get:
 *     tags: [FaithPointReligions]
 *     summary: Get faithPointReligion by id
 *     description: Get faithPointReligion by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The faithPointReligion id
 *     responses:
 *       200:
 *         description: FaithPointReligions returned successfully
 *       400:
 *         description: Bad request
 */

// Get faithPointReligion by name

/**
 * @swagger
 * path:
 * /faithPointReligions/findByName/{name}:
 *   get:
 *     tags: [FaithPointReligions]
 *     summary: Get faithPointReligion by name
 *     description: Get faithPointReligion by name
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: The faithPointReligion name
 *     responses:
 *       200:
 *         description: FaithPointReligions returned successfully
 *       400:
 *         description: Bad request
 */