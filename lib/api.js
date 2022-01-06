import logger from "./logger/index.js"

const requestHandler = (name, schema, handler) => {
    return (req, res, next) => {
        if (schema) {
            const validation = schema.validate(req.body);
            const details = validation.error
            if (details) {
                logger.info(`Method ${name} was called with wrong schema: ${details}`)
                res.status(403).send(details);
                return;
            }
        }
        try {
            handler(req, res, next)
        } catch (error) {
            logger.report(name, error, req)
            next(error);
        }

    }
}

export default requestHandler;