import { v4 as uuidv4 } from 'uuid';
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
    const logAuth = {
      id: uuidv4(),
      user,
      typeAuth,
      created_at: new Date(),
    };

    await this.logAuthRepository.register(logAuth);
  }
}

export default SaveLogAuthService;
