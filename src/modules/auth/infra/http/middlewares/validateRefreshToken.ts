import auth from '@config/auth'
import http from '@config/http'
import authDictionary from '@shared/exceptions/dictionary/auth'
import Handler from '@shared/exceptions/Handler'
import { Request, Response, NextFunction } from 'express'
import { verify, TokenExpiredError } from 'jsonwebtoken'

interface ITokenPayload {
    iat: number;
	exp: number;
	id: string;
	name: string;
}

export default async function validateRefreshToken(request: Request, _response: Response, next: NextFunction): Promise<void> {
	const { refreshToken } = request.body;

    if (!refreshToken) {
		return next(
			new Handler(
				authDictionary.AUTHENTICATED_FAILED_PARAMETERS.MESSAGE,
				authDictionary.AUTHENTICATED_FAILED_PARAMETERS.CODE,
				http.UNAUTHORIZED,
			),
		);
	}

	try {
		const decoded = verify(refreshToken, auth.refresh.expiresIn) as ITokenPayload;

		const { id } = decoded;

		request.body.id = id;

		return next();
	} catch (error) {
		if (error instanceof TokenExpiredError) {
			return next(
				new Handler(
					authDictionary.AUTHENTICATED_FAILED_EXPIRED.MESSAGE,
					authDictionary.AUTHENTICATED_FAILED_EXPIRED.CODE,
					http.UNAUTHORIZED,
				),
			);
		}

		return next(
			new Handler(
				authDictionary.AUTHENTICATED_FAILED_DEFAULT.MESSAGE,
				authDictionary.AUTHENTICATED_FAILED_DEFAULT.CODE,
				http.UNAUTHORIZED,
			),
		);
	}
}