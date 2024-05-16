import { body } from 'express-validator';

const loginValidate = [
  body('email')
    .isEmail().withMessage('Email inválido')
    .notEmpty().withMessage('Email é obrigatório'),
  body('password')
    .notEmpty().withMessage('Senha é obrigatória')
];

export default loginValidate;
