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
    console.log ( this.name );
    return this.name;
  }
  getId () {
    console.log ( this.id );
    return this.id;
  }
  getEmail () {
    console.log ( this.email );
    return this.email;
  }
}
class Manager extends Employee {
  constructor ( name, id, email, officeNumber ) {
    super ( name, id, email, );
    this.officeNumber = officeNumber;
  }
  getOfficeNumber () {
    return `Office Number: ${
      this.officeNumber
    }`;
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
}
class Intern extends Employee {
  constructor ( name, id, email, school ) {
    super ( name, id, email );
    this.school = school;
  }
  getSchool () {
    return `School: ${
      this.school
    }`;
  }
} 

start ();

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
