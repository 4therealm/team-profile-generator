
const inquirer = require('inquirer')
let applicant =[]
const team = []
const basicInfo = [
  {
    type: 'input',
    name:'name',
    message: 'what is their name?',
  },
  {
    type: 'input',
    name:'Id',
    message: 'what is their ID?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is their email?'
  },
]
const engineerQuestions = [
  {
    type: 'input',
    message: 'What is their Github name?',
    name: 'github'
  }
]
const internQuestions = [
  {
    type:'input',
    message:'What school did they go to?',
    name:'school',
  }
]
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
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
      super(name, id, email,)
      this.officeNumber = officeNumber
      }
      getOfficeNumber(){return `Office Number: ${this.officeNumber}`}    
}
class Engineer extends Employee{
    constructor(name, id, email, github){
      super(name, id, email)
      this.github = github
    }
    getGithub(){return this.github}
}
class Intern extends Employee{
    constructor(name, id, email, school){
      super(name, id, email)
      this.school = school;
    }
    getSchool(){return `School: ${this.school}`} 
}
// applicant.push(answers.name);
      // applicant.push(answers.id);
      // applicant.push(answers.email);
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
function getBasicInfo() {
    inquirer
    .prompt({
      type: 'list',
      name: 'role',
      message: 'What position would you like to fill?',
      choices: ['Manager', 'Engineer', 'Intern'],
    })
    .then((role)=>{
       let position = role.role
      switch(position) {
        case 'Manager':
         getManagerInfo()
        //  start()
        console.log(team)
         break;
        case 'Engineer':
          applicant = getEngineerInfo()
         console.log(applicant)
         break;
        case 'Intern':
          applicant = getInternInfo()
         console.log(applicant)
         break;
     }
    })
}

function getManagerInfo(){
  basicInfo.push({type: 'input', message: 'What is their office number?', name:'officeNumber'})
    inquirer
    .prompt(basicInfo)
    .then(data =>{
      const newEmployee = new Manager(data.name, data.id, data.email, data.officeNumber)
      team.push(newEmployee)
    })
}
function getEngineerInfo(employeeObj){
    inquirer
    .prompt(engineerQuestions)
    .then(data =>{
      let gH = data.github
      console.log(data)
      console.log(employeeObj)
      return `${gH}`
    })
}
function getInternInfo(employeeObj){
    inquirer
    .prompt(internQuestions)
    .then(data =>{
     let skewl = data.school
     console.log(data)
     return `${skewl}`
    })
}
