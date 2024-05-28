/**
 * @swagger
 * tags:
 *   name: Country
 *   description: Country management
 */

// Post a new country

/**
 * @swagger
 * path:
 * /country:
 *   post:
 *     tags: [Country]
 *     summary: Create a new country
 *     description: Create a new country
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Country'
 *     responses:
 *       200:
 *         description: Country created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Update a country

/**
 * @swagger
 * path:
 * /country/{id}:
 *   put:
 *     tags: [Country]
 *     summary: Update a country
 *     description: Update a country
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The country id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Country'
 *     responses:
 *       200:
 *         description: Country updated successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Delete a country

/**
 * @swagger
 * path:
 * /country/{id}:
 *   delete:
 *     tags: [Country]
 *     summary: Delete a country
 *     description: Delete a country
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The country id
 *     responses:
 *       200:
 *         description: Country deleted successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Get all countries

/**
 * @swagger
 * path:
 * /country:
 *   get:
 *     tags: [Country]
 *     summary: Get all countries
 *     description: Get all countries
 *     responses:
 *       200:
 *         description: Countries retrieved successfully
 *       500:
 *         description: Server error
 */

// Get country by id

/**
 * @swagger
 * path:
 * /country/{id}:
 *   get:
 *     tags: [Country]
 *     summary: Get country by id
 *     description: Get country by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The country id
 *     responses:
 *       200:
 *         description: Country retrieved successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Get country by code

/**
 * @swagger
 * path:
 * /country/findByCode:
 *   get:
 *     tags: [Country]
 *     summary: Get country by code
 *     description: Get country by code
 *     parameters:
 *       - in: query
 *         name: code
 *         required: true
 *         schema:
 *           type: string
 *         description: The country code
 *     responses:
 *       200:
 *         description: Country retrieved successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Get country by short name

/**
 * @swagger
 * path:
 * /country/findByShortName:
 *   get:
 *     tags: [Country]
 *     summary: Get country by short name
 *     description: Get country by short name
 *     parameters:
 *       - in: query
 *         name: short_name
 *         required: true
 *         schema:
 *           type: string
 *         description: The country short name
 *     responses:
 *       200:
 *         description: Country retrieved successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Get country by long name

/**
 * @swagger
 * path:
 * /country/findByLongName:
 *   get:
 *     tags: [Country]
 *     summary: Get country by long name
 *     description: Get country by long name
 *     parameters:
 *       - in: query
 *         name: long_name
 *         required: true
 *         schema:
 *           type: string
 *         description: The country long name
 *     responses:
 *       200:
 *         description: Country retrieved successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */