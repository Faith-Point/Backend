import 'dotenv/config';

const maskJSONOptions = {
	maskWith: '*',
	fields: ['password', 'pass', 'pass_confirm', 'senha', 'confirma_senha'],
};

export default maskJSONOptions;