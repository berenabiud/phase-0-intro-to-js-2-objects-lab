// Write your solution in this file!
let employee = {
    name: "Billy",
    streetAddress : "Washington",
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee,
    [key] : value};
    
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]= value;
    return employee ;
}
function deleteFromEmployeeByKey(employee, key){
    let newemployee={...employee}
    delete newemployee[key]
    return newemployee

}
function  destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return  employee;
}