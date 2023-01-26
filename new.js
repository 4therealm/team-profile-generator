const Employee = require('./classes/Employee')
const Manager = require('./classes/Manager')
const Engineer = require('./classes/Engineer')
const Intern = require('./classes/Intern')
const fs = require('fs')
const inquirer = require ( 'inquirer' );
const nodeMon = require ( 'nodemon' );
const team = [];
const basicInfo = [
  { type: 'input', name: 'name', message: 'what is their name?' },
  { type: 'input', name: 'id', message: 'what is their ID?' },
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
      default: startGame()
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
  htmlContent += `</body></html>`
  fs.writeFile('index.html', htmlContent,(err) =>
  err ? console.log(err) : console.log('Success!')
);  
nextAction()
}
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
    console.log(team)
    team.splice(targetIndex,1)
    console.log(team)
    console.log(`\n------${selection.target} has been removed from the roster--------\n`)
    start()
    })
  
}