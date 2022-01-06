import logger from '../logger/index.js';

export default (req, res, next) => {
    logger.info(`Was called http method ${req.method} with body ${JSON.stringify(req.body)}`);
    res.on('finish', (chunk) => {
        logger.info(`Was send ${res.statusCode}`)
    })
    next();
}