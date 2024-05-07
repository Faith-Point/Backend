/* eslint-disable @typescript-eslint/ban-ts-comment */
import { injectable, inject } from 'tsyringe';
import Handler from '@shared/exceptions/Handler';
import { Request } from 'express';
import Mask from '@shared/util/Mask';
import LogException from '@modules/shared/logException/infra/typeorm/entities/LogException';
import ILogExceptionRepository from '../domain/repositories/ILogExceptionRepository';
import logger from '@shared/logger';

@injectable()
class CreateLogExceptionService {
	constructor(
		@inject('LogExceptionRepository')
		private LogExceptionRepository: ILogExceptionRepository,
	) {
		logger.info('Injetando LogExeptionRepository - CreateLogExeption');
	}

	async execute(handler: Handler, request: Request): Promise<Handler> {
		logger.info('Setndo handler e request do execute - CreateLogExeption');

		this.setIp(handler, request);
		this.setAgent(handler, request);
		this.setUrl(handler, request);
		this.setRequest(handler, request);
		this.setData(handler, request);
		const logException = await this.save(handler);

		this.setTraceId(handler, logException);
		logger.info('Retornando o handler - CreateLogExeption');

		return handler;
	}

	private setAgent(handler: Handler, request: Request): void {
		logger.info('Entrando no setAgent - CreateLogExeption');
		Object.assign(handler).agent = request.get('User-Agent');
		logger.info('Retornando o setAgent - CreateLogExeption');
	}

	private setIp(handler: Handler, request: Request): void {
		logger.info('Entrando no setIp - CreateLogExeption');
		Object.assign(handler).ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress;
		logger.info('Retornando o setIp - CreateLogExeption');
	}

	private setUrl(handler: Handler, request: Request): void {
		logger.info('Entrando no setUrl - CreateLogExeption');
		Object.assign(handler).url = request.originalUrl;
		logger.info('Retornando o setUrl - CreateLogExeption');
	}

	private setRequest(handler: Handler, request: Request): void {
		logger.info('Entrando no setRequest - CreateLogExeption');
		Object.assign(handler).method = request.method.toLowerCase();
		logger.info('Retornando o setRequest - CreateLogExeption');
	}

	private setData(handler: Handler, request: Request): void {
		const maskedData = Mask.maskData(request.body);
		logger.info('Entrando no setData - CreateLogExeption');
		Object.assign(handler).data = JSON.stringify(maskedData);
		logger.info('Retornando o setData - CreateLogExeption');
	}

	private setTraceId(handler: Handler, logException: LogException): void {
		logger.info('Entrando no setTraceId - CreateLogExeption');
		Object.assign(handler).traceId = logException.id;
		logger.info('Retornando o setTraceId - CreateLogExeption');
	}

	private async save(handler: Handler): Promise<LogException> {
		logger.info('Entrando no save - CreateLogExeption');
		const LogException = await this.LogExceptionRepository.save(handler);
		logger.info('Retornando o save - CreateLogExeption');
		return LogException;
	}
}

export default CreateLogExceptionService;