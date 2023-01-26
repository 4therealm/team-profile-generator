const inquirer = require('inquirer')
import {new_employee} from "/modules/Employee.js";
const myTeamArray = [];


start()
function start(){
  inquirer
  .prompt({
    type:'list',
    name: 'addEmployee',
    message:'Would you like to add an employee?',
    choices: ['yes', 'no']
  })
  .then((data) => {data ? getBasicInfo() : exit()});
}


console.log(new_employee)


