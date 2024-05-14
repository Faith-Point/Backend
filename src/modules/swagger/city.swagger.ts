/**
 * @swagger
 * tags:
 *   name: City
 *   description: City management
 */

/**
 * @swagger
 * path:
 * /city:
 *   post:
 *     tags: [City]
 *     summary: Create a new city
 *     description: Create a new city
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/City'
 *     responses:
 *       200:
 *         description: City created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * path:
 * /city/{id}:
 *   put:
 *     tags: [City]
 *     summary: Update a city
 *     description: Update a city
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The city id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/City'
 *     responses:
 *       200:
 *         description: City updated successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * path:
 * /city/{id}:
 *   delete:
 *     tags: [City]
 *     summary: Delete a city
 *     description: Delete a city
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The city id
 *     responses:
 *       200:
 *         description: City deleted successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * path:
 * /city:
 *   get:
 *     tags: [City]
 *     summary: Get all cities
 *     description: Get all cities
 *     responses:
 *       200:
 *         description: A list of cities
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/City'
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * path:
 * /city/{id}:
 *   get:
 *     tags: [City]
 *     summary: Get a city by ID
 *     description: Get a city by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The city id
 *     responses:
 *       200:
 *         description: City details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/City'
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * path:
 * /city/findByState:
 *   get:
 *     tags: [City]
 *     summary: Get cities by state
 *     description: Get cities by state
 *     parameters:
 *       - in: query
 *         name: state
 *         required: true
 *         schema:
 *           type: string
 *         description: The state id
 *     responses:
 *       200:
 *         description: List of cities
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/City'
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * path:
 * /city/findByShortName:
 *   get:
 *     tags: [City]
 *     summary: Get a city by short name
 *     description: Get a city by short name
 *     parameters:
 *       - in: query
 *         name: shortName
 *         required: true
 *         schema:
 *           type: string
 *         description: The city short name
 *     responses:
 *       200:
 *         description: City details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/City'
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * path:
 * /city/findByLongName:
 *   get:
 *     tags: [City]
 *     summary: Get a city by long name
 *     description: Get a city by long name
 *     parameters:
 *       - in: query
 *         name: longName
 *         required: true
 *         schema:
 *           type: string
 *         description: The city long name
 *     responses:
 *       200:
 *         description: City details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/City'
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * path:
 * /city/findByCode:
 *   get:
 *     tags: [City]
 *     summary: Get a city by code
 *     description: Get a city by code
 *     parameters:
 *       - in: query
 *         name: code
 *         required: true
 *         schema:
 *           type: string
 *         description: The city code
 *     responses:
 *       200:
 *         description: City details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/City'
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */
