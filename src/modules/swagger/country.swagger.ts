/**
 * @swagger
 * tags:
 *   name: Country
 *   description: Country management
 */

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
 *         description: Country updated
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

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
 *         description: A list of countries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Country'
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * path:
 * /country/{id}:
 *   get:
 *     tags: [Country]
 *     summary: Get a country by ID
 *     description: Get a country by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The country id
 *     responses:
 *       200:
 *         description: Country details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Country'
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * path:
 * /country/findByCode:
 *   get:
 *     tags: [Country]
 *     summary: Get a country by code
 *     description: Get a country by code
 *     parameters:
 *       - in: query
 *         name: code
 *         required: true
 *         schema:
 *           type: string
 *         description: The country code
 *     responses:
 *       200:
 *         description: Country details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Country'
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * path:
 * /country/findByShortName:
 *   get:
 *     tags: [Country]
 *     summary: Get a country by short name
 *     description: Get a country by short name
 *     parameters:
 *       - in: query
 *         name: shortName
 *         required: true
 *         schema:
 *           type: string
 *         description: The country short name
 *     responses:
 *       200:
 *         description: Country details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Country'
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * path:
 * /country/findByLongName:
 *   get:
 *     tags: [Country]
 *     summary: Get a country by long name
 *     description: Get a country by long name
 *     parameters:
 *       - in: query
 *         name: longName
 *         required: true
 *         schema:
 *           type: string
 *         description: The country long name
 *     responses:
 *       200:
 *         description: Country details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Country'
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */
