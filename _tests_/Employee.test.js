const Employee = require('../classes/Employee')
const obj = new Employee('max', 5, 'thorshammermw@gmail.com')
describe("employee", () => {
  describe("Initialization", () => {
    it("should return an object containing a name, id, and email property when called with the 'new' keyword", () => {
      const obj = new Employee();

      expect("id" in obj).toEqual(true);
    });
    it("should return a string, a number and a string", () =>{
     
      
      expect(obj.name).toEqual('max')
      expect(obj.id).toEqual(5)
      expect(obj.email).toEqual('thorshammermw@gmail.com')
    });
    it('should return the employees name, id, and email when the functions are called', () =>{
      expect(obj.getName()).toEqual('max')
      expect(obj.getId()).toEqual(5)
      expect(obj.getEmail()).toEqual('thorshammermw@gmail.com')
      expect(obj.getRole()).toEqual('Employee')
    })

  })})