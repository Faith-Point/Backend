import { Router } from 'express';
import { celebrate } from 'celebrate';
import loginValidate from '@shared/http/auth/validator/LoginValidate';
import RefreshToken from '@shared/http/auth/validator/RefreshToken';
import AuthController from '@modules/auth/infra/http/controllers/AuthController';
import validateRefreshToken from '@shared/http/auth/middleware/validateRefreshToken';
import isAuthenticated from '@shared/http/auth/middleware/isAuthenticated';

const routes = Router();
const controller = new AuthController();

routes.post('/login', celebrate(loginValidate), controller.login);
routes.post('/logout', isAuthenticated, controller.logout);
routes.post('/refresh/token', celebrate(RefreshToken), validateRefreshToken, controller.refreshToken);

export default routes;
