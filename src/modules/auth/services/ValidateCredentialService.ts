import http from '@config/http';
import Handler from '@shared/exceptions/Handler';
import authDictionary from '@shared/exceptions/dictionary/auth';
import Password from '@shared/util/Password';

class ValidateCredentialService {
  public static async execute(password: string, userPassword: string): Promise<boolean> {
    console.log('ValidateCredentialService.execute receiving:', password, userPassword);
    const passwordConfirmed = await Password.compare(password, userPassword);
    if (!passwordConfirmed) {
      console.log('ValidateCredentialService.execute password not confirmed');
      throw new Handler(
        authDictionary.CREDENTIALS_INVALID.MESSAGE,
        authDictionary.CREDENTIALS_INVALID.CODE,
        http.UNAUTHORIZED,
      );
    }
    console.log('ValidateCredentialService.execute password confirmed');
    return true;
  }
}

export default ValidateCredentialService;
