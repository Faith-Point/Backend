import pino from 'pino';
import logger from '../../config/logger';

const log = pino({
	name: 'app',
	level: logger.level,
});

export default log;