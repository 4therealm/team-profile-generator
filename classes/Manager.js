const inquirer = require('inquirer')
import {managerQuestions} from "/modules/questions.js";
import {Employee} from "/modules/Employee.js";
class Manager extends Employee{
  constructor(name, id, email, officeNumber){
    super(name, id, email,)
    this.officeNumber = officeNumber
    }
    getOfficeNumber(){return `Office Number: ${this.officeNumber}`}    
}

function getManagerInfo(employeeObj){
  inquirer
  .prompt(managerQuestions)
  .then(data =>{
    employeeObj.officeNumber = data.officeNumber
    console.log(data)
    console.log(employeeObj)
  })
  return employeeObj
}

module.exports = {
  Manager,
  getManagerInfo
}