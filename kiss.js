const Employee = require('./classes/Employee')
const Manager = require('./classes/Manager')
const Engineer = require('./classes/Engineer')
const Intern = require('./classes/Intern')
const fs = require('fs')
const inquirer = require ( 'inquirer' );
const nodemon = require ( 'nodemon' );
const {getMaxListeners}=require('process')
const team = [];
const basicInfo = [
  { type: 'input', name: 'name', message: 'what is their name?' },
  { type: 'input', name: 'id', message: 'what is their ID?' },
  { type: 'input', name: 'email', message: 'What is their email?' },
];
let htmlContent =  `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/dist/style.css">
  <title>Team Roster</title>
</head>
<body>
  <div class="container">
    <div class="row cardContainer">`
const htmlClosing = `
        </div>
      </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
  </body>
</html>`
// close inquirer input if user press "escape" key
process.stdin.on('keypress', function(_,key) {
    if(key.name==="escape") {
      exit()
    }
  });
start ();

//initiation
function start (){
  inquirer
  .prompt ( { 
    type: 'list',
    name: 'addEmployee', 
    message: 'Would you like to add an employee?', 
    choices: [ 'yes', 'no' ] } )
  .then ( ( data ) => {data ? getPosition () : exit();});
}
//determines what to do after an employee has been added, or removed
function nextAction(){
  basicInfo.pop()
  inquirer
  .prompt ( {
    type: 'list', 
    name: 'nextAction', 
    message: 'What would you like to do next, boss?', 
    choices: [ 'Add Employee','Preview Roster', 'Exit' ] } )
  .then ( ( choice ) => {
    switch ( choice.nextAction ) {
      case 'Add Employee': getPosition();
        break;
      case 'Preview Roster': previewTeam();
        break;
      case 'Exit': exit();
        break;
    }
  } );
}
//assigns role to new employee and calls the corresponding Class function
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
        break;
      case 'Engineer': hireEngineer ();
        break;
      case 'Intern': hireIntern ();
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
      console.log(`\n----------------------${data.name} has been Hired!--------------------\n`)
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
      console.log(`\n----------------------${data.name} has been Hired!--------------------\n`)
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
      console.log(`\n----------------------${data.name} has been Hired!--------------------\n`)
      nextAction()
    });
    
}
// logs current team array, then user decides to generate or edit
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
//user decides to add or remove employees from array
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
//creates an html file with team roster
function writeHTML(){
  team.forEach(emp =>{htmlContent += emp.cardContent()})
  htmlContent+= htmlClosing
  fs.writeFile('index.html', htmlContent,(err) =>
  err ? console.log(err) : console.log('\nSuccess!\n')
);  
nextAction()
}
// TestWriteHTML()
// function TestWriteHTML(){
//   const max = new Manager('max',4,'thorshammermw@gmail.com',85)
//   const maxwell = new Engineer('maxwell',5,'thorshammermw@gmail.com','4therealm')
//   const maxine = new Engineer('maxine',9,'thorshammermw@gmail.com','odeToTheCode')
//   const maxitaxi = new Intern('maxitaxi',55,'thorshammermw@gmail.com','homeschool')
//   const maxette = new Intern('maxette',55,'thorshammermw@gmail.com','homeschool')
  
//   const dummyArray = [max, maxwell, maxine, maxitaxi, maxette]
  
//   dummyArray.forEach(emp =>{htmlContent += emp.cardContent()})
//   htmlContent+= htmlClosing
//   fs.writeFile('index.html', htmlContent,(err) =>
//   err ? console.log(err) : console.log('\nSuccess!\n')
// );}
//user targets employees in team array they wish to remove. targets are located and spliced from array
function removeEmp(){
  inquirer
  .prompt ({
    type: 'list',
    name: 'target',
    message: 'Select employee to remove',
    choices: [...team],
  } )
  .then ( ( selection ) => {
    console.log(selection.target)
    let targetIndex = team.indexOf(selection.target)
    team.splice(targetIndex,1)
    console.log(team)
    console.log(`\n------${selection.target} has been removed from the roster--------\n`)
    previewTeam()
    })
  
}