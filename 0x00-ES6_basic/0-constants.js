function taskFirst() {
	const task = "I prefer const when I can";
	return task;
}

module.exports = taskFirst;

function taskNext() {
	let task = "But sometimes let is okay";
	return task;
}

module.exports = taskNext;
