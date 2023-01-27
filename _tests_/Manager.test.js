const Manager = require('../classes/Manager')
const obj = new Manager('max', 5, 'thorshammermw@gmail.com', 5)
describe("Manager", () => {
  describe("Initialization", () => {
    it("should return an object containing a name, id, email property, and an office number and when called with the 'new' keyword", () => {
      const obj = new Manager();
      expect("officeNumber" in obj).toEqual(true);
    });
    it("should return a number when getOfficeNumber() is called", () =>{
      expect(obj.getOfficeNumber()).toEqual(5)
    });
    it('should return the employees role when called', () =>{
      expect(obj.getRole()).toEqual('Manager')
    })

  })})