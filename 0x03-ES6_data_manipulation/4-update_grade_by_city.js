/* eslint-disable */

export default function updateStudentGradeByCity(studentList, city, newGrades) {
	const updatedStudents = studentList 
		.filter((student) => student.location === city) 
		.map((student) => {
			const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
			return {
				...student,
				grade: matchingGrade ? matchingGrade.grade : "N/A"
			};
		});
	
	return updatedStudents;
}
