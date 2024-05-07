import { IState } from '@modules/shared/state/domain/interfaces/IState';

interface IUpdateCity {
  	short_name?: string;
	long_name?: string;
	code?: string;
	state?: IState;
	updated_at: Date;
}

export default IUpdateCity;
