// @ts-nocheck
import { isCelebrateError } from 'celebrate';

import Dictionary from '@shared/exceptions/dictionary/request';

class CelebrateError {
	public treatReturn(error: Error): string {
		if (isCelebrateError(error) && error.details) {
			const {
				details: [errorDetails],
			} = errorBody;
			return errorDetails.message;
		}
		return Dictionary.INVALID_PARAMETERS.MESSAGE;
	}
}
export default CelebrateError;