import Winston from 'winston';

const logger = Winston.createLogger({
    format: Winston.format.json(),
    colorize: true,
    transports: [
        new Winston.transports.Console({
            format: Winston.format.combine(
                Winston.format.colorize(),
                Winston.format.simple()
            )
        })
    ]
});

export default logger;