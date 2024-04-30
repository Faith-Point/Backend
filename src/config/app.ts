import 'dotenv/config';

const app = {
	name: process.env.APP_NAME || 'backend-faith-point',
	env: process.env.APP_ENV || 'production',
	debug: process.env.APP_DEBUG || false,
	url: process.env.APP_URL || 'localhost',
	port: process.env.APP_PORT || 3308,
	timezone: 'America/Sao_Paulo',
	locale: process.env.APP_LOCALE || 'pt-br',
};

export default app;