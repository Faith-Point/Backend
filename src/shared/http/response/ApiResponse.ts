import { IResponse } from '@shared/http/response/interfaces/IResponse';

class ApiResponse {
	static execute<T>(message: string, data?: T): IResponse {
		const dataResponse: IResponse = {
			message,
			hasError: false,
			data,
		};

		return dataResponse;
	}
}

export default ApiResponse;