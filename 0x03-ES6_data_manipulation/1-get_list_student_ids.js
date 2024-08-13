/* eslint-disable */

export default function getListStudentIds(studentArray) {
	if (!Array.isArray(studentArray)) {
		return [];
	}

	const studentIds = studentArray.map((student) => student.id);

	return studentsIds;
}
