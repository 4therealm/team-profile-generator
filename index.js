const Employee = require('./classes/Employee')
const Engineer = require('./classes/Engineer')
const Manager = require('./classes/Manager')
const Intern = require('./classes/Intern')


Manager.prototype.getOfficeNumber = function(){
  return `Office Number: ${this.officeNumber}`
}

const information = Max.getInfo()
console.log(information)
console.log(Max)