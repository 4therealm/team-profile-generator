const fs =require('fs')
const inquirer = require ( 'inquirer' );
const team = [];
const basicInfo = [
  { type: 'input', name: 'name', message: 'what is their name?' },
  { type: 'input', name: 'Id', message: 'what is their ID?' },
  { type: 'input', name: 'email', message: 'What is their email?' },
];
let htmlContent =  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="/dist/style.css">
  <title>Team Roster</title>
</head>
<body>`
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
      <li>Office: ${this.getOfficeNumber()}</li>
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

start ();


function start (){
  inquirer
  .prompt ( { 
    type: 'list',
    name: 'addEmployee', 
    message: 'Would you like to add an employee?', 
    choices: [ 'yes', 'no' ] } )
  .then ( ( data ) => {data ? getPosition () : exit();});
}
function nextAction(){
  basicInfo.pop()
  inquirer
  .prompt ( {
    type: 'list', 
    name: 'nextAction', 
    message: 'What would you like to do next, boss?', 
    choices: [ 'Add Employee','Preview Roster' ] } )
  .then ( ( choice ) => {
    switch ( choice.nextAction ) {
      case 'Add Employee': getPosition();
        break;
      case 'Preview Roster': previewTeam();
        break;
    }
  } );
}
function getPosition(){
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
function hireManager(){
  basicInfo.push ( { 
    type: 'input', 
    message: 'What is their office number?', 
    name: 'officeNumber' } );
  inquirer
    .prompt ( basicInfo )
    .then ( data => {team.push ( new Manager ( data.name, data.id, data.email, data.officeNumber ) );
      console.log('\n----------------------Hired--------------------\n')
      nextAction()
    } );
}
function hireEngineer(){
  basicInfo.push ( { 
    type: 'input', 
    message: 'What is their Github name?', 
    name: 'github' } );
  inquirer
    .prompt ( basicInfo )
    .then ( data => {team.push ( new Engineer ( data.name, data.id, data.email, data.github ));
      console.log('\n----------------------Hired--------------------\n')
      nextAction()
        });
}
function hireIntern(){
  basicInfo.push ( { 
    type: 'input', 
    message: 'What school did they go to?', 
    name: 'school' } );
  inquirer
    .prompt ( basicInfo )
    .then ( data => {team.push ( new Intern ( data.name, data.id, data.email, data.school ));
      console.log('\n----------------------Hired--------------------\n')
      nextAction()
    });
    
}
function previewTeam(){
  console.log(team)
  inquirer
  .prompt ( { 
    type: 'list',
    name: 'confirm', 
    message: 'Would you like to generate this team roster?', 
    choices: [ 'yes', 'no' ] } )
  .then ( ( data ) => {data.confirm == 'yes' ? writeHTML() : editTeam();});
}
function editTeam(){
  inquirer
  .prompt ( {
    type: 'list', 
    name: 'action', 
    message: 'Choose an action', 
    choices: [ 'Add new employee', 'Remove existing employee'] } )
  .then ( ( choice ) => {
    switch ( choice.action ) {
      case 'Add new employee': getPosition();
        break;
      case 'Remove existing employee': removeEmp();
        break;
    }
  } );
}
function writeHTML(){
  team.forEach(emp =>{htmlContent += emp.cardContent()})
  htmlContent += `</body></html>`
  fs.writeFile('index.html', htmlContent,(err) =>
  err ? console.log(err) : console.log('Success!')
);  
}
function removeEmp(){
  inquirer
  .prompt ({
    type: 'checkbox',
    name: 'stack',
    message: 'Select employees to remove',
    choices: [...team],
  } )
  .then ( ( selection ) => {
    console.log(selection)
    selection.forEach(emp=>{
    let target = team.indexOf(emp)
    team.splice(target,1)
    console.log(team)
    console.log(`\n--------------\n`)
    console.log(`${emp} has been removed from the roster`)
    })
   nextAction() 
  } );
}