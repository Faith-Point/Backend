interface ILogException {
	id: string;
	message: string;
	type: string;
	stack: string;
	code: string;
	agent: string;
	ip: string;
	url: string;
	method: string;
	data: string;
	created_at: Date;
	updated_at: Date;
	deleted_at: Date;
}

export default ILogException;