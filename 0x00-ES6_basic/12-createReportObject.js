/*eslint-disable*/

import createEmployeesObject from "./11-createEmployeesObject.js";

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