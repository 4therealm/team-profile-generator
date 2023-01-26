const Employee = require("./Employee")
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

    <div class ='col'>
      <div class ='card'>
      <h2>${this.name}</h2>
      <h3>Intern</h3>
      <ul>
        <li>ID: ${this.id}</li>
        <li>Email: <a href="mailto:${this.email}">${this.email}</a></li>
        <li>School: ${this.school}</li>
      </ul>
    </div>
  </div>`
  }
} 

module.exports = Intern