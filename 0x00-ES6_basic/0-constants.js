/*eslint-disable*/

export function taskFirst() {
	const task = 'I prefer const when I can.';
	return task;
}
  
export function taskNext() {
	const combination = 'But sometimes let';
	combination += getLast();
	return combination;
}
