/*eslint-disable*/

export default function createReportObject(employeesList) {
    return {
        allEmployees: {
            ...employeesList
        },
        getNumberOfDepartments() {
            return object.keys(employeesList).length
        },       
    };
}