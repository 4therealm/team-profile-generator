// classes Employee, Manager, Engineer, Intern
//Employee parent class:
class Employee{
  constructor(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Employee'
    
    //methods
  // this.getName(){
  //   return name;
  // }

  // this.getId()

  // this.getEmail()

  // this.getRole()
}}
const person = new Employee('max','4','thorshammermw@gmail.com')
console.log(person.email)

class Manager extends Employee{
  constructor(name, id, email, officeNumber){
    this.officeNumber = officeNumber
    this.role = 'Manager'
    this.getRole()
  }

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