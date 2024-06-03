/* eslint-disable @typescript-eslint/ban-ts-comment */
import { injectable, inject } from 'tsyringe';
import Handler from '@shared/exceptions/Handler';
import { Request } from 'express';
import Mask from '@shared/util/Mask';
import LogException from '@modules/shared/logException/infra/typeorm/entities/LogException';
import ILogExceptionRepository from '../domain/repositories/ILogExceptionRepository';

@injectable()
class CreateLogExceptionService {
	constructor(
		@inject('LogExceptionRepository')
		private LogExceptionRepository: ILogExceptionRepository,
	) {}

	async execute(handler: Handler, request: Request): Promise<Handler> {

		this.setIp(handler, request);
		this.setAgent(handler, request);
		this.setUrl(handler, request);
		this.setRequest(handler, request);
		this.setData(handler, request);
		const logException = await this.save(handler);

		this.setTraceId(handler, logException);
		return handler;
	}

	private setAgent(handler: Handler, request: Request): void {
		Object.assign(handler).agent = request.get('User-Agent');
	}

	private setIp(handler: Handler, request: Request): void {
		Object.assign(handler).ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress;
	}

	private setUrl(handler: Handler, request: Request): void {
		Object.assign(handler).url = request.originalUrl;
	}

	private setRequest(handler: Handler, request: Request): void {
		Object.assign(handler).method = request.method.toLowerCase();
	}

	private setData(handler: Handler, request: Request): void {
		const maskedData = Mask.maskData(request.body);
		Object.assign(handler).data = JSON.stringify(maskedData);
	}

	private setTraceId(handler: Handler, logException: LogException): void {
		Object.assign(handler).traceId = logException.id;
	}

	private async save(handler: Handler): Promise<LogException> {
		const LogException = await this.LogExceptionRepository.save(handler);
		return LogException;
	}
}

export default CreateLogExceptionService;