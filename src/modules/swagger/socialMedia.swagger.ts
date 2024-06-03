/**
 * @swagger
 * tags:
 *   name: Social Media
 *   description: Social Media management
 */

// Post a new socialMedia

/**
 * @swagger
 * path:
 * /socialMedia:
 *   post:
 *     tags: [SocialMedia]
 *     summary: Create a new Social Media
 *     description: Create a new socialMedia
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SocialMedia'
 *     responses:
 *       200:
 *         description: Social Media created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Update a socialMedia

/**
 * @swagger
 * path:
 * /socialMedia/{id}:
 *   put:
 *     tags: [SocialMedia]
 *     summary: Update a socialMedia
 *     description: Update a socialMedia
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The socialMedia id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SocialMedia'
 *     responses:
 *       200:
 *         description: SocialMedia updated successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Delete a socialMedia

/**
 * @swagger
 * path:
 * /socialMedia/{id}:
 *   delete:
 *     tags: [SocialMedia]
 *     summary: Delete a socialMedia
 *     description: Delete a socialMedia
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The socialMedia id
 *     responses:
 *       200:
 *         description: SocialMedia deleted successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Find all socialMedia

/**
 * @swagger
 * path:
 * /socialMedia:
 *   get:
 *     tags: [SocialMedia]
 *     summary: Find all socialMedia
 *     description: Find all socialMedia
 *     responses:
 *       200:
 *         description: SocialMedia returned successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Find socialMedia by id

/**
 * @swagger
 * path:
 * /socialMedia/{id}:
 *   get:
 *     tags: [SocialMedia]
 *     summary: Find socialMedia by id
 *     description: Find socialMedia by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The socialMedia id
 *     responses:
 *       200:
 *         description: SocialMedia returned by id
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Find socialMedia by name

/**
 * @swagger
 * path:
 * /socialMedia/name/{name}:
 *   get:
 *     tags: [SocialMedia]
 *     summary: Find socialMedia by name
 *     description: Find socialMedia by name
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: The socialMedia name
 *     responses:
 *       200:
 *         description: SocialMedia returned by name
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */