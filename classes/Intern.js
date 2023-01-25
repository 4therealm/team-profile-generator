const Employee = require('./classes/Employee')
const Engineer = require('./classes/Engineer')
const Manager = require('./classes/Manager')
class Intern extends Employee{
  constructor(name, id, email, school){
    super(name, id, email)
    this.school = school;
  }
  getSchool(){
    return `School: ${this.school}`
  } 
}


  module.exports = Intern