import { Router, Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import loginValidate from '@shared/http/auth/validator/LoginValidate';
import refreshTokenValidate from '@shared/http/auth/validator/RefreshToken';
import AuthController from '@modules/auth/infra/http/controllers/AuthController';
import validateRefreshToken from '@shared/http/auth/middleware/validateRefreshToken';
import isAuthenticated from '@shared/http/auth/middleware/isAuthenticated';

const routes = Router();
const controller = new AuthController();

const validate = (req: Request, res: Response, next: NextFunction): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    next();
  }
};

routes.post('/login', loginValidate, validate, controller.login);
routes.post('/logout', isAuthenticated, controller.logout);
routes.post('/refresh/token', refreshTokenValidate, validate, validateRefreshToken, controller.refreshToken);

export default routes;
