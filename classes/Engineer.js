const inquirer = require('inquirer')
import {engineerQuestions} from "/modules/questions.js";
import {Employee} from "/modules/Employee.js";

class Engineer extends Employee{
  constructor(name, id, email, github){
    super(name, id, email)
    this.github = github
  }
  getGithub(){return this.github}
}

function getEngineerInfo(employeeObj){
  inquirer
  .prompt(engineerQuestions)
  .then(data =>{
    employeeObj.school = data.github
    console.log(data)
    console.log(employeeObj)
  })
  return employeeObj
}

module.exports = [
  Engineer,
  getEngineerInfo
]
