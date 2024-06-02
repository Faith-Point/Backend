/**
 * @swagger
 * tags:
 *   name: FaithPointSchedule
 *   description: FaithPointSchedule management
 */

// Post a new faithPointSchedule

/**
 * @swagger
 * path:
 * /faithPoint/Schedule:
 *   post:
 *     tags: [FaithPointSchedule]
 *     summary: Create a new faithPointSchedule
 *     description: Create a new faithPointSchedule
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FaithPointSchedule'
 *     responses:
 *       200:
 *         description: FaithPointSchedule created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Update a faithPointSchedule

/**
 * @swagger
 * path:
 * /faithPoint/Schedule/{id}:
 *   put:
 *     tags: [FaithPointSchedule]
 *     summary: Update a faithPointSchedule
 *     description: Update a faithPointSchedule
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The faithPointSchedule id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FaithPointSchedule'
 *     responses:
 *       200:
 *         description: FaithPointSchedule updated successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Delete a faithPointSchedule

/**
 * @swagger
 * path:
 * /faithPoint/Schedule/{id}:
 *   delete:
 *     tags: [FaithPointSchedule]
 *     summary: Delete a faithPointSchedule
 *     description: Delete a faithPointSchedule
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The faithPointSchedule id
 *     responses:
 *       200:
 *         description: FaithPointSchedule deleted successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Get all faithPointSchedule

/**
 * @swagger
 * path:
 * /faithPoint/Schedule:
 *   get:
 *     tags: [FaithPointSchedule]
 *     summary: Find all faithPointSchedule
 *     description: Find all faithPointSchedule
 *     responses:
 *       200:
 *         description: FaithPointSchedule returned successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Get faithPointSchedule by id

/**
 * @swagger
 * path:
 * /faithPoint/Schedule/{id}:
 *   get:
 *     tags: [FaithPointSchedule]
 *     summary: Find faithPointSchedule by id
 *     description: Find faithPointSchedule by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The faithPointSchedule id
 *     responses:
 *       200:
 *         description: FaithPointSchedule returned successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Get faithPointSchedule by date

/**
 * @swagger
 * path:
 * /faithPoint/Schedule/{date}:
 *   get:
 *     tags: [FaithPointSchedule]
 *     summary: Find faithPointSchedule by date
 *     description: Find faithPointSchedule by date
 *     parameters:
 *       - in: path
 *         name: date
 *         required: true
 *         schema:
 *           type: string
 *         description: The faithPointSchedule date
 *     responses:
 *       200:
 *         description: FaithPointSchedule returned successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Get faithPointSchedule by faith_point

/**
 * @swagger
 * path:
 * /faithPoint/Schedule/{faith_point}:
 *   get:
 *     tags: [FaithPointSchedule]
 *     summary: Find faithPointSchedule by faith_point
 *     description: Find faithPointSchedule by faith_point
 *     parameters:
 *       - in: path
 *         name: faith_point
 *         required: true
 *         schema:
 *           type: string
 *         description: The faithPointSchedule faith_point
 *     responses:
 *       200:
 *         description: FaithPointSchedule returned successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */