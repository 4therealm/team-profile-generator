const inquirer = require('inquirer')
import {internQuestions} from "/modules/questions.js";
import {Employee} from "/modules/Employee.js";

class Intern extends Employee{
  constructor(name, id, email, school){
    super(name, id, email)
    this.school = school;
  }
  getSchool(){return `School: ${this.school}`} 
}
function getInternInfo(employeeObj){
  inquirer
  .prompt(internQuestions)
  .then(data =>{
   employeeObj.school = data.school
   console.log(data)
   console.log(employeeObj)
  })
  return employeeObj
}

  module.exports = {
    Intern,
    getInternInfo
  }
