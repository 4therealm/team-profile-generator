






# Team-Profile-Generator  
A CLI operated app that will create employee cards based on users input, then display those cards in a generated HTML document.

## description
* Assignment: #10
* Due: 1/30/2023  
* deployed: https://4therealm.github.io/team-profile-generator/   
* repo: https://github.com/4therealm/team-profile-generator 
* Demo: https://drive.google.com/file/d/1EycNXrv2jia5hWvPu1Ck5_Jo5d5gXM57/view?usp=share_link
* Photo
  <img src="/img/employee-html-screenshot.PNG" alt="a display of three employee profile cards">

## User Story
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles.

## Acceptance Criteria
GIVEN a command-line application that accepts user input  

WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated





## Instal
```
npm i

```
## Run
```
node kiss.js

```
## Testing
```
npm test

```