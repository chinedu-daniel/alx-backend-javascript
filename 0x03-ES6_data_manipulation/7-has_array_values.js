/* eslint-disable */

export default function hasValueFromArray(set, array) {
	for (const elem of array) {
		if (!set.has(elem)) {
			return false;
		}
	}
	return true;
}
