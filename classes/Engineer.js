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
    <div class="card employeeCard col-2 m-2">
      <div class="card-body">
        <h5 class="card-title">${this.name}</h5>
        <h6 class="card-title">${this.getRole()}</h6>
      <div class="card">
        <ul class="list-group empInfo list-group-flush">
          <li class="list-group-item">ID: ${this.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
          <li class="list-group-item">
            Github: <a href="http://github.com/${this.getGithub()}"target="_blank" rel="noopener noreferrer">${this.getGithub()}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>`
  }
}


module.exports = Engineer