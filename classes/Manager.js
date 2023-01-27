const Employee = require("./Employee")
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
    <div class="card employeeCard col-2 m-2">
      <div class="card-body">
        <h5 class="card-title">${this.name}</h5>
        <h6 class="card-title">${this.getRole()}</h6>
      <div class="card">
        <ul class="list-group empInfo list-group-flush">
          <li class="list-group-item">ID: ${this.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
          <li class="list-group-item">Office number: ${this.getOfficeNumber()}</li>
        </ul>
      </div>
    </div>
  </div>`
  }
}

module.exports = Manager