const Employee = require('./classes/Employee')
const Engineer = require('./classes/Engineer')
const Intern = require('./classes/Intern')
class Manager extends Employee{
  constructor(name, id, email, officeNumber){
    super(name, id, email,)
    this.officeNumber = officeNumber
    }
    getOfficeNumber(){
      return `Office Number: ${this.officeNumber}`
    }    
}

module.exports = Manager