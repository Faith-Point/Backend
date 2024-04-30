import 'dotenv/config';
import app from '../config/app';

const logger = {
	enabled: app.debug,
	level: 'info',
};

export default logger;