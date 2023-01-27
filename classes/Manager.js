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
    <div class="card employeeCard col">
      <div class="card-body">
        <h5 class="card-title">${(this.name).toUpperCase()}</h5>
        <h6 class="card-title">${this.getRole()}        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi icons bi-compass" viewBox="0 0 16 16">
        <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
        <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/>
      </svg></h6>
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