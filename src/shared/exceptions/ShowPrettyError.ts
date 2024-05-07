/* eslint-disable no-console */
import PrettyError from 'pretty-error';
import app from '@config/app';
import logger from '@shared/logger';

class ShowPrettyError {
	static execute(error: Error): void {
		if (app.env === 'dev' && app.debug) {
			const prettyerror = new PrettyError();
			logger.fatal(prettyerror.render(error));
		}
	}
}

export default ShowPrettyError;