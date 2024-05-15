import http from '@config/http';
import Handler from '@shared/exceptions/Handler';
import authDictionary from '@shared/exceptions/dictionary/auth';
import Password from '@shared/util/Password';
import logger from '@shared/logger';

class ValidateCredentialService {
  public static async execute(password: string, userPassword: string): Promise<boolean> {
    logger.info('ValidateCredentialService.execute recieving:', password , userPassword);
    const passwordConfirmed = await Password.compare(password, userPassword);
    if (!passwordConfirmed) {
      logger.info('ValidateCredentialService.execute password not confirmed');
      throw new Handler(
        authDictionary.CREDENTIALS_INVALID.MESSAGE,
        authDictionary.CREDENTIALS_INVALID.CODE,
        http.UNAUTHORIZED,
      );
    }
    logger.info('ValidateCredentialService.execute password confirmed');
    return true;
  }
}

export default ValidateCredentialService;
