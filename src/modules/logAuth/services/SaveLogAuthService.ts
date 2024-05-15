import { inject, injectable } from 'tsyringe';
import ILogAuthRepository from '@modules/logAuth/domain/repositories/ILogAuthRepository';
import ISaveLogAuth from '@modules/logAuth/domain/interfaces/ISaveLogAuth';

@injectable()
class SaveLogAuthService {
  constructor(
    @inject('LogAuthRepository')
    private logAuthRepository: ILogAuthRepository,
  ) {}

  public async execute({ user, typeAuth }: ISaveLogAuth): Promise<void> {
    await this.logAuthRepository.register({ user, typeAuth });
  }
}

export default SaveLogAuthService;