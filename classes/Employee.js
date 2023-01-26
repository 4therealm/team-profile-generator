const inquirer = require('inquirer')
import { basicInfo } from "/modules/questions.js";
import { getManagerInfo, Manager } from "/modules/Manager.js";
import { getEngineerInfo, Engineer } from "/modules/Engineer.js";
import { getInternInfo, Intern } from "/modules/Intern.js";
const new_employee = {}
class Employee{
  constructor(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
  }
getName(){
  console.group(this.name)
  return this.name
}
getId(){
  console.group(this.id)
  return this.id
}
getEmail(){
  console.group(this.email)
  return this.email
}
}

 function getBasicInfo() {
    inquirer
    .prompt(basicInfo)
    .then((answers)=>{
      new_employee.name = answers.name;
      new_employee.id = answers.id;
      new_employee.email = answers.email;
      new_employee.role = answers.role
      console.log(new_employee)
      switch(answers.role) {
        case 'Manager':
         console.log(`look out we have a new manager`)
         getManagerInfo(new_employee)
         break;
        case 'Engineer':
         console.log(`great another tech head`)
         getEngineerInfo(new_employee)
         break;
        case 'Intern':
         console.log(`another grunt for the horde`)
         getInternInfo(new_employee)
         break;
     }
    })
  }


module.exports = {
  Employee,
  getBasicInfo
};