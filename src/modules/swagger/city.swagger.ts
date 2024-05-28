/**
 * @swagger
 * tags:
 *   name: City
 *   description: City management
 */

// Post a new city

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

// Update a city

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
 */

// Delete a city

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

// Find all cities

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
 *         description: Cities found successfully
 *       400:
 *         description: Bad request
 */

// Find city by id

/**
 * @swagger
 * path:
 * /city/{id}:
 *   get:
 *     tags: [City]
 *     summary: Get city by id
 *     description: Get city by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The city id
 *     responses:
 *       200:
 *         description: City found successfully
 *       400:
 *         description: Bad request
 */

// Find city by state

/**
 * @swagger
 * path:
 * /city/findByState:
 *   get:
 *     tags: [City]
 *     summary: Get city by state
 *     description: Get city by state
 *     responses:
 *       200:
 *         description: City found successfully
 *       400:
 *         description: Bad request
 */

// Find city by short name

/**
 * @swagger
 * path:
 * /city/findByShortName:
 *   get:
 *     tags: [City]
 *     summary: Get city by short name
 *     description: Get city by short name
 *     responses:
 *       200:
 *         description: City found successfully
 *       400:
 *         description: Bad request
 */

// Find city by long name

/**
 * @swagger
 * path:
 * /city/findByLongName:
 *   get:
 *     tags: [City]
 *     summary: Get city by long name
 *     description: Get city by long name
 *     responses:
 *       200:
 *         description: City found successfully
 *       400:
 *         description: Bad request
 */

// Find city by code

/**
 * @swagger
 * path:
 * /city/findByCode:
 *   get:
 *     tags: [City]
 *     summary: Get city by code
 *     description: Get city by code
 *     responses:
 *       200:
 *         description: City found successfully
 *       400:
 *         description: Bad request
 */