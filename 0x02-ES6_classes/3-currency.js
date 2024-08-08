/* eslint-disable */

export default class Currency {
	constructor(code, name) {
		this.code = code;
		this.name = name;
	}

	set code(code) {
		if (typeof code !== 'string') {
			throw new TypeError('Code must be a String');
		}
		this._code = code;
	}

	get code() {
		return this._code;
	}

	set name(name) {
		if (typeof name !== 'string') {
			throw new TypeError('Name must be a string');
		}
		return this._name = value;
	}

	get name() {
		return this._name;
	}

	displayFullCurrency() {
		return `${this.name} (${this.code})`;
	}
}
