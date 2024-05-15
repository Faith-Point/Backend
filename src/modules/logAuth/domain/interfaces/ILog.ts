import typeAuth from '@modules/logAuth/domain/interfaces/ITypeAuth';

interface ILog {
	type: typeAuth;
	created_at: string;
}

export default ILog;
