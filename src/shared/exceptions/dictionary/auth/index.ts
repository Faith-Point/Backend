const authDictionary = {
	AUTHENTICATED_FAILED_DEFAULT: {
		CODE: '3.1',
		MESSAGE: 'Erro na autenticação do usuário.',
	},
	CREDENTIALS_INVALID: {
		CODE: '3.2',
		MESSAGE: 'As credenciais informadas estão incorretos.',
	},
	AUTHENTICATED_FAILED_PARAMETERS: {
		CODE: '3.3',
		MESSAGE: 'Não foram encontrado dados para a autenticação.',
	},
	AUTHENTICATED_FAILED_EXPIRED: {
		CODE: '3.4',
		MESSAGE: 'Autenticação expirada.',
	},
	AUTHENTICATED_FAILED_REFRESH_TOKEN: {
		CODE: '3.5',
		MESSAGE: 'Erro ao realizar atualização do refresh_token.',
	},
	PARAMETERS_AUTHENTICATED_NOT_FOUND: {
		CODE: '3.6',
		MESSAGE: 'Não foram encontrado dados para a autenticação.',
	},
	AUTHENTICATION_EXPIRED: {
		CODE: '3.7',
		MESSAGE: 'Autenticação expirada.',
	},
};

export default authDictionary;
