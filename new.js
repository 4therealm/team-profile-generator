const fs =require('fs')
const inquirer = require ( 'inquirer' );
const team = [];
const basicInfo = [
  { type: 'input', name: 'name', message: 'what is their name?' },
  { type: 'input', name: 'Id', message: 'what is their ID?' },
  { type: 'input', name: 'email', message: 'What is their email?' },
];

class Employee {
  constructor ( name, id, email ) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName () {
    return this.name;
  }
  getId () {
    return this.id;
  }
  getEmail () {
    return this.email;
  }
}
class Manager extends Employee {
  constructor ( name, id, email, officeNumber ) {
    super ( name, id, email, );
    this.officeNumber = officeNumber;
  }
  getOfficeNumber () {
    return this.officeNumber;
  }
  cardContent(){
    return`
    <div>
    <h2>${this.name}</h2>
    <h3>Manager</h3>
    <ul>
      <li>ID: ${this.id}</li>
      <li>Email: ${this.email}</li>
      <li>Office: ${this.OfficeNumber}</li>
    </ul>
  </div>`
  }
}
class Engineer extends Employee {
  constructor ( name, id, email, github ) {
    super ( name, id, email );
    this.github = github;
  }
  getGithub () {
    return this.github;
  }
  cardContent(){
    return`
    <div>
    <h2>${this.name}</h2>
    <h3>Engineer</h3>
    <ul>
      <li>ID: ${this.id}</li>
      <li>Email: ${this.email}</li>
      <li>Github: ${this.github}</li>
    </ul>
  </div>`
  }
}
class Intern extends Employee {
  constructor ( name, id, email, school ) {
    super ( name, id, email );
    this.school = school;
  }
  getSchool () {
    return this.school;
  }
  cardContent(){
    return`
    <div>
    <h2>${this.name}</h2>
    <h3>Intern</h3>
    <ul>
      <li>ID: ${this.id}</li>
      <li>Email: ${this.email}</li>
      <li>School: ${this.school}</li>
    </ul>
  </div>`
  }
} 

// start ();

function start () {
  inquirer
  .prompt ( { 
    type: 'list',
    name: 'addEmployee', 
    message: 'Would you like to add an employee?', 
    choices: [ 'yes', 'no' ] } )
  .then ( ( data ) => {data ? getPosition () : exit ();});
}
function getPosition () {
  inquirer
  .prompt ( {
    type: 'list', 
    name: 'role', 
    message: 'What position would you like to fill?', 
    choices: [ 'Manager', 'Engineer', 'Intern' ] } )
  .then ( ( choice ) => {
    switch ( choice.role ) {
      case 'Manager': hireManager ();
        console.log ( team.length );
        break;
      case 'Engineer': hireEngineer ();
        console.log ( team.length );
        break;
      case 'Intern': hireIntern ();
        console.log ( team.length );
        break;
    }
  } );
}
function hireManager () {
  basicInfo.push ( { 
    type: 'input', 
    message: 'What is their office number?', 
    name: 'officeNumber' } );
  inquirer
    .prompt ( basicInfo )
    .then ( data => {
      const newManager = new Manager ( data.name, data.id, data.email, data.officeNumber );
      team.push ( newManager );
  } );
}
function hireEngineer () {
  basicInfo.push ( { 
    type: 'input', 
    message: 'What is their Github name?', 
    name: 'github' } );
  inquirer
    .prompt ( basicInfo )
    .then ( data => {
      const newEngineer = new Engineer ( data.name, data.id, data.email, data.github );
      team.push ( newEngineer );
  } );
}
function hireIntern () {
  basicInfo.push ( { 
    type: 'input', 
    message: 'What school did they go to?', 
    name: 'school' } );
  inquirer
    .prompt ( basicInfo )
    .then ( data => {
      const newIntern = new Intern ( data.name, data.id, data.email, data.school );
      team.push ( newIntern );
  } );
}
const max = new Manager('max', 5, 'thorshammermw@gmail.com', 12);
const maxwell = new Engineer('maxwell', 6, 'thorshammermw@gmail.com', '4therealm');
const maxine = new Intern('maxine', 7, 'thorshammermw@gmail.com', 'Homeschooled');
const myTeam = [max,maxwell,maxine]
// console.log(max.cardContent())
// console.log(maxwell.cardContent())
// console.log(maxine.cardContent())
const htmlOpening = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>`
function writeHTML(){
  let htmlContent = `${htmlOpening}`
  myTeam.forEach(emp =>{
    htmlContent += emp.cardContent()
  })
  htmlContent += `</body></html>`
  fs.writeFile('index.html', htmlContent,(err) =>
  err ? console.log(err) : console.log('Success!')
);  
}
writeHTML()

// console.log(myTeam)
