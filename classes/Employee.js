const Engineer = require('./classes/Engineer')
const Manager = require('./classes/Manager')
const Intern = require('./classes/Intern')
class Employee{
  constructor(name, id, email, role){
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role
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

module.exports = Employee