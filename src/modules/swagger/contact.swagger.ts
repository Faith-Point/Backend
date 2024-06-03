/** 
 * @swagger
 * tags:
 *  name: Contact
 *  description: Contact management
 */

// Post a new contact

/**
 * @swagger
 * path:
 * /contact:
 *   post:
 *     tags: [Contact]
 *     summary: Create a new contact
 *     description: Create a new contact
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contact'
 *     responses:
 *       200:
 *         description: Contact created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Update a contact

/**
 * @swagger
 * path:
 * /contact/{id}:
 *   put:
 *     tags: [Contact]
 *     summary: Update a contact
 *     description: Update a contact
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The contact id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contact'
 *     responses:
 *       200:
 *         description: Contact updated successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Delete a contact

/**
 * @swagger
 * path:
 * /contact/{id}:
 *   delete:
 *     tags: [Contact]
 *     summary: Delete a contact
 *     description: Delete a contact
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The contact id
 *     responses:
 *       200:
 *         description: Contact deleted successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Get all contacts

/**
 * @swagger
 * path:
 * /contact:
 *   get:
 *     tags: [Contact]
 *     summary: Get all contacts
 *     description: Get all contacts
 *     responses:
 *       200:
 *         description: All contacts returned
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Get contact by id

/**
 * @swagger
 * path:
 * /contact/{id}:
 *   get:
 *     tags: [Contact]
 *     summary: Get contact by id
 *     description: Get contact by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The contact id
 *     responses:
 *       200:
 *         description: Contact returned
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Get contact by name

/**
 * @swagger
 * path:
 * /contact/name/{name}:
 *   get:
 *     tags: [Contact]
 *     summary: Get contact by name
 *     description: Get contact by name
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: The contact name
 *     responses:
 *       200:
 *         description: Contact returned by name
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Get contact by phone

/**
 * @swagger
 * path:
 * /contact/phone/{phone}:
 *   get:
 *     tags: [Contact]
 *     summary: Get contact by phone
 *     description: Get contact by phone
 *     parameters:
 *       - in: path
 *         name: phone
 *         required: true
 *         schema:
 *           type: string
 *         description: The contact phone
 *     responses:
 *       200:
 *         description: Contact returned by phone
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

// Get contact by email

/**
 * @swagger
 * path:
 * /contact/email/{email}:
 *   get:
 *     tags: [Contact]
 *     summary: Get contact by email
 *     description: Get contact by email
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *         description: The contact email
 *     responses:
 *       200:
 *         description: Contact returned by email
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

