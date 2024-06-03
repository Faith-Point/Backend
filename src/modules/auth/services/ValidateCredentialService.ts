import http from '@config/http';
import Handler from '@shared/exceptions/Handler';
import authDictionary from '@shared/exceptions/dictionary/auth';
import Password from '@shared/util/Password';

class ValidateCredentialService {
  public static async execute(password: string, userPassword: string): Promise<boolean> {
    const passwordConfirmed = await Password.compare(password, userPassword);
    if (!passwordConfirmed) {
      throw new Handler(
        authDictionary.CREDENTIALS_INVALID.MESSAGE,
        authDictionary.CREDENTIALS_INVALID.CODE,
        http.UNAUTHORIZED,
      );
    }
    return true;
  }
}

export default ValidateCredentialService;
