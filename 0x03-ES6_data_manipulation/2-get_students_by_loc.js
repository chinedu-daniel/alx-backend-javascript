/* eslint-disable */

export default function getStudentByLocation(students, city) {
	const studentsInCity = students.filter((student) => student.location === city);

	return studentsInCity;
}
