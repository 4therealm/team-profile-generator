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
  {
    type: 'list',
    name: 'role',
    message: 'What position would you like to fill?',
    choices: ['Manager', 'Engineer', 'Intern'],
  },
]
const managerQuestions = [
  {
    type: 'input',
    message: 'What is their office number?',
    name:'officeNumber'
  }
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

module.exports = {
  basicInfo,
  managerQuestions,
  engineerQuestions,
  internQuestions
};