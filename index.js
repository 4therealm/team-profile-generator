// classes Employee, Manager, Engineer, Intern
//Employee parent class:
class Employee{
  constructor(name, id, email, role){
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role
}}
class Manager extends Employee{
  constructor(name, id, email, role, officeNumber){
    super(name, id, email, role)
    this.officeNumber = officeNumber
    this.getOfficeNumber()
    }
}
const Max = new Manager('max','4','thorshammermw@gmail.com', 'Manager', 20)
console.log(Max.email)



Employee.prototype.getInfo = function(){
  return `Name: ${this.name} \nRole: ${this.role} \nID: ${this.id} \nEmail: ${this.email}  `
}
Manager.prototype.getOfficeNumber = function(){
  return `Office Number: ${this.officeNumber}`
}

class Engineer extends Employee{
  constructor(name, id, email, github){
    this.github = github
    this.getGithub()
    this.role = 'Engineer'
    this.getRole()
  }
}
class Intern extends Employee{
  constructor(name, id, email, school){
    this.school = school;
    this.getSchool()
    this.role = 'Intern'
    this.getRole()
  }

}
const information = Max.getInfo()
console.log(information)
console.log(Max)