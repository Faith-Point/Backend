import { body } from 'express-validator';

const refreshTokenValidate = [
  body('refreshToken')
    .notEmpty().withMessage('Refresh token é obrigatório')
];

export default refreshTokenValidate;
