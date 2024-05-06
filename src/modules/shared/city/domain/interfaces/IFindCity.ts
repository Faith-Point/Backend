import { IState } from '@modules/shared/state/domain/interfaces/IState';

interface IFindCity {
	id: string;
	short_name: string;
	long_name: string;
	code: string;
	state: IState;
}

export default IFindCity;