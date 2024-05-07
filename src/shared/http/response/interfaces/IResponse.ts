export interface IResponse {
	message: string;
	hasError: boolean;
	data?: any;
	error?: {
		messageError: string;
		type: string;
		code: string | null;
		traceId: string;
	};
}