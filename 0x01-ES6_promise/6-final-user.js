/* eslint-disable */

import signUpUser from '/4-user-promise.js';
import uploadPhoto from '/5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, fileName) {
	const name = signUpUser(firstName, lastName);
	const photo = uploadPhoto(fileName);

	return Promise.allSettled([name, photo])
		.then((result) => result.map((obj) => ({
			status: obj.status,
			value: obj.status === 'fulfilled' ? obj.value : obj.reason,
		})))
}
