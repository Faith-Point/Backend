import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'API documentation for the project',
    },
    servers: [
      {
        url: `http://localhost:${process.env.API_PORT || 3308}`,
        description: 'Development server',
      },
    ],
  },
  apis: [
    './src/modules/**/infra/http/routes/*.ts',
    './src/modules/shared/**/infra/http/routes/*.ts', 
    './src/modules/swagger/*.swagger.ts' 
  ],
};

const specs = swaggerJsdoc(options);

const setupSwagger = (app: Express): void => {
  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(specs));
};

export default setupSwagger;
