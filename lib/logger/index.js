import winston from './winstonLogger.js';

const Logger = class {
    info(message) {
        winston.info(message)
    }
    warn(message) {
        winston.warn(message)
    }
    debug(message) {
        winston.debug(message)
    }
    report(name, error, ...args) {
        let message = `Method ${name} throw an error: ${error}. \n Arguments was passed into method: ${args}`
        this.error(message)
    }
}

export default new Logger();