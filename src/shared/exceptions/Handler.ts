/* eslint-disable no-new */
import http from '@config/http';

class Handler extends Error {
	public message: string;

	public code: string;

	public statusCode: number;

	public type: string;

	public messageError: string;

	public ip: string;

	public agent: string;

	public url: string;

	public method: string;

	public data: string;

	public traceId: string;

	public created_at: Date;

	public updated_at: Date;

	public deleted_at: Date;

	constructor(message: string, code: string, statusCode = http.BAD_REQUEST, type = 'Exception') {
		super();

		this.message = message;

		this.messageError = message;

		this.type = type;

		this.code = code;

		this.statusCode = statusCode;
	}
}

export default Handler;