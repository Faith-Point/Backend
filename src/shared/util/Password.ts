import config from '@config/bcrypt';
import { hash, compare } from 'bcryptjs';

class Password {
  public static async encode(password: string): Promise<string> {
    const hashedPassword = await hash(password, config.bcrypt.round);
    return hashedPassword;
  }

  public static async compare(password: string, passwordEncode: string): Promise<boolean> {
    console.log('Password.compare receiving:', password, passwordEncode);

    // Ensure that passwordEncode is a valid bcrypt hash
    if (!passwordEncode.startsWith('$2')) {
      console.log('Invalid bcrypt hash format');
      return false;
    }

    // Ensure both password and passwordEncode are strings
    const passwordStr = password.toString();
    const passwordEncodeStr = passwordEncode.toString();

    const passwordConfirmed = await compare(passwordStr, passwordEncodeStr);
    console.log('Password.compare passwordConfirmed:', passwordConfirmed);

    return passwordConfirmed;
  }
}

export default Password;
