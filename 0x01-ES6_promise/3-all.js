/* eslint-disable */

import { uploadPhoto, createUser } from './utilis';

export default function handleProfileSignup() {
	return Promise
		.all([uploadPhoto(), createUser()])
		.then((res) => {
			console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`);
		})
		.catch(() => console.error('Signup system offline'));
}
