import 'reflect-metadata';
import { Request } from 'express';
import Handler from '@shared/exceptions/Handler';
import ILogExceptionRepository from '@modules/shared/logException/domain/repositories/ILogExceptionRepository';
import CreateLogExceptionService  from '@modules/shared/logException/services/CreateLogExceptionService';


describe('CreateLogExceptionService', () => {
  let service: CreateLogExceptionService;
  let mockLogExceptionRepository: ILogExceptionRepository;
  let mockRequest: Partial<Request>;
  let handler: Handler;

  beforeEach(() => {
    mockLogExceptionRepository = {
      findById: jest.fn().mockResolvedValue({ id: '123', otherProperties: 'value' }),
      save: jest.fn().mockResolvedValue({ id: '123' }),
    };

    service = new CreateLogExceptionService(mockLogExceptionRepository as any);

    mockRequest = {
      get: jest.fn().mockReturnValue('Test-Agent'),
      headers: { 'x-forwarded-for': '127.0.0.1' },
      originalUrl: '/test-url',
      method: 'POST',
      body: { sensitiveData: 'secret' }
    };

    handler = new Handler(
      'Test-Message',
      'Test-Code',
      200,
      'Test-Type',
    );
  });

  describe('execute', () => {
    it('should complete without error', async () => {
      const result = await service.execute(handler, mockRequest as Request);

      expect(result).toBeInstanceOf(Handler);
      expect(mockLogExceptionRepository.save).toHaveBeenCalled();
      expect(result.traceId).toEqual('123');
    });

    it('should set the correct agent', async () => {
      await service.execute(handler, mockRequest as Request);
      expect(handler.agent).toEqual('Test-Agent');
    });
  });
});
