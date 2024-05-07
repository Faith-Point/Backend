import log from '@shared/logger';
import config from '@config/app';
import { app } from './app';

app.listen(config.port, () => {
	log.info(`server listening on port ${config.port}`);
});