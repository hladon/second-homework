import logger from '../logger/index.js';

export default (err, req, res, next) => {
    if (err) {
        logger.report('Exception midleware', err.stack);
        return res.status(500).send();
    }
    next();
}