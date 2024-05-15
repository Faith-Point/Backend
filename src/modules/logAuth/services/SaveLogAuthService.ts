import { inject, injectable } from 'tsyringe';
import ILogAuthRepository from '@modules/logAuth/domain/repositories/ILogAuthRepository';
import ISaveLogAuth from '@modules/logAuth/domain/interfaces/ISaveLogAuth';
import logger from '@shared/logger';

@injectable()
class SaveLogAuthService {
  constructor(
    @inject('LogAuthRepository')
    private logAuthRepository: ILogAuthRepository,
  ) {}

  public async execute({ user, typeAuth }: ISaveLogAuth): Promise<void> {
    logger.info('SaveLogAuthService.execute recieving:', user, typeAuth);
    await this.logAuthRepository.register({ user, typeAuth });
    logger.info('SaveLogAuthService.execute logAuthRepository.register executed');
  }
}

export default SaveLogAuthService;