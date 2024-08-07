/* eslint-disable */

import { uploadPhoto, createUser } from './utilis';

export default function handleProfileSignup() {
	Promise.all([uploadPhoto(), createUser()])
		.then(([photoResult, userResult]) => {
			const { firstName, lastName } = userResult.body;
			console.log(`User profile updated: ${firstName} ${lastName}`);
		})
		.catch(() => {
			console.error('Signup system offline:', error.message);
		});
}
