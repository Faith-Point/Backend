import config from '@config/bcrypt';
import { hash, compare } from 'bcryptjs';

class Password {
  public static async encode(password: string): Promise<string> {
    const hashedPassword = await hash(password, config.bcrypt.round);
    return hashedPassword;
  }

  public static async compare(password: string, passwordEncode: string): Promise<boolean> {
    if (!passwordEncode.startsWith('$2')) {
      return false;
    }
    const passwordStr = password.toString();
    const passwordEncodeStr = passwordEncode.toString();
    const passwordConfirmed = await compare(passwordStr, passwordEncodeStr);
    return passwordConfirmed;
  }
}

export default Password;
