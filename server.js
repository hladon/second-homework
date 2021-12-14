import express from 'express';
import bp from 'body-parser';
import cors from 'cors';
import config from './config/index.js';
import router from './api/router.js';
import logger from './api/logging/logger.js';
import { loginRouter, authenticateToken } from './api/common/authentication/controller.js';

const app = express();
const port = config.port;

app.use(bp.json());

app.use(cors());

app.use((req, res, next) => {
    logger.info(`Was called http method ${req.method} with body ${JSON.stringify(req.body)}`);
    res.on('finish', (chunk) => {
        logger.info(`Was send ${res.statusCode}`)
    })
    next();
});

app.use('/login', loginRouter);

app.use(authenticateToken);


app.use('/', router);

app.use((err, req, res, next) => {
    if (err) {
        logger.error(err.stack);
    }
    next();
});

process
    .on('unhandledRejection', (reason, p) => {
        logger.error(reason, 'Unhandled Rejection at Promise', p);
    })
    .on('uncaughtException', err => {
        logger.error(err, 'Uncaught Exception thrown');
    });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
export { app };