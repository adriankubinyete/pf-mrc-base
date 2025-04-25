import "dotenv/config";
import { logging } from './src/utils/logging/index.js';
import fastify from './src/utils/config/index.js';

// logging
const logger = logging.getLogger(process.env.LOGGING_BASE_NAME);
logger.addTransport(new logging.transports.Console({ level: logging.UNIT }))
logger.addTransport(new logging.transports.FileRotate({
    level: logging.UNIT,
    filename: process.env.LOGGING_FILENAME || 'runtime.log',
    maxSize: '20m',
    maxFiles: '7d'
}))

// basic fastify get route
fastify.get('/', async (req, res) => {
    const dwadwa = dwadwad
    return { hello: 'world' }
})


// fastify
fastify.listen({ port: parseInt(process.env.FASTIFY_PORT || 3000) , host: '0.0.0.0' }, (err, address) => {
    if (err) {
        logger.error(err)
        process.exit(1)
    }
    logger.info(`server listening on ${address}`)
})