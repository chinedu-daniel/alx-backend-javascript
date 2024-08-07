/* eslint-disable */

export default function signupUser(firstName, lastName) {
	const name = {
		firstName,
		lastName,
	};

	return Promise.resolve(name);
}
