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
    <div class ='col'>
    <div class ='card'>
    <h2>${this.name}</h2>
    <h3>Manager</h3>
    <ul>
      <li>ID: ${this.id}</li>
      <li>Email: <a href="mailto:${this.email}">${this.email}</a></li>
      <li>Office: ${this.getOfficeNumber()}</li>
    </ul>
  </div>
  </div>`
  }
}

module.exports = Manager