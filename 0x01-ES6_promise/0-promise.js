/*eslint-disable*/

function getResponseFromAPI() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const success = true;
			if (success) {
				resolve('Data received successfully');
			} else {
				reject('Error fetching data');
			}
		}, 1000);
	});
