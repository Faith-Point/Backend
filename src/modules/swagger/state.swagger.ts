/**
 * @swagger
 * tags:
 *   name: State
 *   description: State management
 */

/**
 * @swagger
 * path:
 * /state:
 *   post:
 *     tags: [State]
 *     summary: Create a new state
 *     description: Create a new state
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/State'
 *     responses:
 *       200:
 *         description: State created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * path:
 * /state/{id}:
 *   put:
 *     tags: [State]
 *     summary: Update a state
 *     description: Update a state
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The state id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/State'
 *     responses:
 *       200:
 *         description: State updated successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * path:
 * /state/{id}:
 *   delete:
 *     tags: [State]
 *     summary: Delete a state
 *     description: Delete a state
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The state id
 *     responses:
 *       200:
 *         description: State deleted successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * path:
 * /state:
 *   get:
 *     tags: [State]
 *     summary: Get all states
 *     description: Get all states
 *     responses:
 *       200:
 *         description: A list of states
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/State'
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * path:
 * /state/{id}:
 *   get:
 *     tags: [State]
 *     summary: Get a state by ID
 *     description: Get a state by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The state id
 *     responses:
 *       200:
 *         description: State details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/State'
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * path:
 * /state/findByCountry:
 *   get:
 *     tags: [State]
 *     summary: Get states by country
 *     description: Get states by country
 *     parameters:
 *       - in: query
 *         name: country
 *         required: true
 *         schema:
 *           type: string
 *         description: The country id
 *     responses:
 *       200:
 *         description: List of states
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/State'
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * path:
 * /state/findByShortName:
 *   get:
 *     tags: [State]
 *     summary: Get a state by short name
 *     description: Get a state by short name
 *     parameters:
 *       - in: query
 *         name: shortName
 *         required: true
 *         schema:
 *           type: string
 *         description: The state short name
 *     responses:
 *       200:
 *         description: State details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/State'
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * path:
 * /state/findByLongName:
 *   get:
 *     tags: [State]
 *     summary: Get a state by long name
 *     description: Get a state by long name
 *     parameters:
 *       - in: query
 *         name: longName
 *         required: true
 *         schema:
 *           type: string
 *         description: The state long name
 *     responses:
 *       200:
 *         description: State details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/State'
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * path:
 * /state/findByCode:
 *   get:
 *     tags: [State]
 *     summary: Get a state by code
 *     description: Get a state by code
 *     parameters:
 *       - in: query
 *         name: code
 *         required: true
 *         schema:
 *           type: string
 *         description: The state code
 *     responses:
 *       200:
 *         description: State details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/State'
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */
