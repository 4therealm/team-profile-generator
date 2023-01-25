const Employee = require('./classes/Employee')
const Manager = require('./classes/Manager')
const Intern = require('./classes/Intern')
class Engineer extends Employee{
  constructor(name, id, email, github){
    super(name, id, email)
    this.github = github
  }
  getGithub(){
    return this.github

  }

}

module.exports = Engineer