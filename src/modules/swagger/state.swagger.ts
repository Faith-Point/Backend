/**
 * @swagger
 * tags:
 *   name: State
 *   description: State management
 */


// Post a new state

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

// Update a state

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
 */

// Delete a state

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

// Get all states

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
 *         description: States found successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Get state by id

/**
 * @swagger
 * path:
 * /state/{id}:
 *   get:
 *     tags: [State]
 *     summary: Get state by id
 *     description: Get state by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The state id
 *     responses:
 *       200:
 *         description: State found successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Get state by country

/**
 * @swagger
 * path:
 * /state/findByCountry:
 *   get:
 *     tags: [State]
 *     summary: Get state by country
 *     description: Get state by country
 *     parameters:
 *       - in: query
 *         name: country_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The country id
 *     responses:
 *       200:
 *         description: State found successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Get state by short name

/**
 * @swagger
 * path:
 * /state/findByShortName:
 *   get:
 *     tags: [State]
 *     summary: Get state by short name
 *     description: Get state by short name
 *     parameters:
 *       - in: query
 *         name: short_name
 *         required: true
 *         schema:
 *           type: string
 *         description: The state short name
 *     responses:
 *       200:
 *         description: State found successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Get state by long name

/**
 * @swagger
 * path:
 * /state/findByLongName:
 *   get:
 *     tags: [State]
 *     summary: Get state by long name
 *     description: Get state by long name
 *     parameters:
 *       - in: query
 *         name: long_name
 *         required: true
 *         schema:
 *           type: string
 *         description: The state long name
 *     responses:
 *       200:
 *         description: State found successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Get state by code

/**
 * @swagger
 * path:
 * /state/findByCode:
 *   get:
 *     tags: [State]
 *     summary: Get state by code
 *     description: Get state by code
 *     parameters:
 *       - in: query
 *         name: code
 *         required: true
 *         schema:
 *           type: string
 *         description: The state code
 *     responses:
 *       200:
 *         description: State found successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */