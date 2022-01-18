import express from 'express';
import bp from 'body-parser';
import cors from 'cors';
import { config } from './config/index.js';
import router from './api/router.js';
import logger from './lib/logger/index.js';
import middleware from './lib/middleware/index.js';

const app = express();
const port = config.port;

initialize()

function initialize() {
    app.use(bp.json());

    app.use(cors());

    app.use(middleware.request);

    app.use('/', router);

    app.use(middleware.error);


    process
        .on('unhandledRejection', (reason, p) => {
            logger.report('Unhandled Rejection at Promise', reason, p);
        })
        .on('uncaughtException', err => {
            logger.report('Uncaught Exception thrown', err);
        });

    app.listen(port, () => {
        logger.info(`Example app listening at http://localhost:${port}`);
    });
}
export { app };