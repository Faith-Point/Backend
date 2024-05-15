// @ts-nocheck
class CleanDeep {
	public static execute(object: unknown): unknown {
		Object.entries(object).forEach(([k, v]) => {
			if (v && typeof v === 'object') this.execute(v);
			if (
				(v && typeof v === 'object' && !Object.keys(v).length) ||
				v === null ||
				v === undefined ||
				v === 'null' ||
				v.length === 0
			) {
				if (Array.isArray(object)) object.splice(k, 1);
				else if (!(v instanceof Date)) delete object[k];
			}
		});

		return object;
	}
}

export default CleanDeep;
