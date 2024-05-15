import config from '@config/bcrypt';
import { hash, compare } from 'bcryptjs';

class Password {
	public static async encode(password: string): Promise<string> {
		const hashedPassword = await hash(password, config.bcrypt.round);

		return hashedPassword;
	}

	public static async compare(password: string, passwordEncode: string): Promise<boolean> {
		const passwordConfirmed = await compare(password.toString(), passwordEncode);

		return passwordConfirmed;
	}
}

export default Password;
