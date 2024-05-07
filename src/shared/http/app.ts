import 'reflect-metadata';
import 'dotenv/config';
import 'express-async-errors';
import '@shared/container'; 
import 'es6-shim';
import '@shared/database';

import express from 'express';
import setupRoutes from './routes';
import { container } from 'tsyringe';
import CreateConnection from '@shared/database/CreateConnection';
import logger from '@shared/logger';
import { isCelebrateError } from 'celebrate';
import Handler from '@shared/exceptions/Handler';
import ShowPrettyError from '@shared/exceptions/ShowPrettyError';
import CreateLogExceptionService from '@modules/shared/logException/services/CreateLogExceptionService';
import ErrorResponse from '@shared/http/response/ErrorResponse';
import http from '@config/http';
import CelebrateError from '@shared/exceptions/CelebrateError';
import Dictionary from '@shared/exceptions/dictionary/request';

const app = express();

app.use(express.json());
app.use(setupRoutes);

CreateConnection.execute();

app.use(async (error: Handler, request: express.Request, response: express.Response) => {
    logger.info('Handling error - App.ts');
    let handler = error;

    if (isCelebrateError(error)) {
        logger.info('Processing Celebrate error - App.ts');
        handler = new Handler(
            new CelebrateError().treatReturn(error),
            Dictionary.INVALID_PARAMETERS.CODE,
            http.OK,
            'CelebrateError',
        );
    }

    ShowPrettyError.execute(error);

    handler.statusCode = handler.statusCode ?? http.INTERNAL_SERVER_ERROR;

    const createLogExceptionService = container.resolve(CreateLogExceptionService);
    createLogExceptionService.execute(handler, request);

    return response.status(handler.statusCode).json(new ErrorResponse().execute(handler));
});

export { app };
