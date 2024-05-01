/* eslint-disable @typescript-eslint/ban-types */
import maskJSONFields from 'maskdata';
// eslint-disable-next-line @typescript-eslint/no-var-requires

class Mask {
	static maskData(obj: object): object {
		return maskJSONFields.maskJSON2 (obj);
	}
}

export default Mask;