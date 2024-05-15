/**
 * @swagger
 * tags:
 *   name: LogAuth
 *   description: Authentication log management
 */

/**
 * @swagger
 * path:
 * /logAuth:
 *   post:
 *     tags: [LogAuth]
 *     summary: Create a new log
 *     description: Create a new log
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 $ref: '#/components/schemas/User'
 *               log:
 *                 $ref: '#/components/schemas/TypeAuth'
 *     responses:
 *       200:
 *         description: Log created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */
