/* eslint-disable */

import { uploadPhoto, createUser } from './utils';

export default async function asyncUploaderUser() {
	try {
		const user = await createUser();
		const photo = await uploadPhoto();
		return { phot, user };
	} catch (error) {
		return { photo: null, user: null };
	}
}
