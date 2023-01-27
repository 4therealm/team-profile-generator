const Employee = require("./Employee")
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
    <div class ='col'>
    <div class ='card'>
    <h2>${this.name}</h2>
    <h3>Engineer</h3>
    <ul>
      <li>ID: ${this.id}</li>
      <li>Email: <a href="mailto:${this.email}">${this.email}</a></li>
      <li><a href="https://github.com/${this.github}" target="_blank" rel="noopener noreferrer">${this.github}</a></li>
    </ul>
    </div>
    </div>`
  }
}


module.exports = Engineer