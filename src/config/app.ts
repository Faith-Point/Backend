import 'dotenv/config';

const app = {
	name: process.env.APP_NAME,
	env: process.env.APP_ENV,
	debug: process.env.APP_DEBUG || false,
	url: process.env.APP_URL,
	port: process.env.APP_PORT || 3308,
	timezone: 'America/Sao_Paulo',
	locale: process.env.APP_LOCALE || 'pt-br',
};

export default app;