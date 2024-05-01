import Handler from '@shared/exceptions/Handler';
import { IResponse } from '@shared/http/response/interfaces/IResponse';

class ErrorResponse {
	public execute(error: Handler): IResponse {
		const response: IResponse = {
			message: error.message,
			hasError: true,
			data: null,
			error: {
				messageError: error.messageError,
				type: error.type,
				code: error.code,
				traceId: error.traceId,
			},
		};

		return response;
	}
}

export default ErrorResponse;