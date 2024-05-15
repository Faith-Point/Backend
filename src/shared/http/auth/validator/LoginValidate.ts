import { Joi as BaseJoi, Segments } from 'celebrate';
import { messages } from 'joi-translation-pt-br'
import JoiDate from '@joi/date';

const Joi = BaseJoi.extend(JoiDate);
const schema = {
    email: Joi.string().email().required().messages(messages),
    password: Joi.string().required().messages(messages),
};

const rules = {
	[Segments.BODY]: schema,
};

export default rules;