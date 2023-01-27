const Engineer = require('../classes/Engineer')
const obj = new Engineer('max', 5, 'thorshammermw@gmail.com', '4therealm')
describe("Manager", () => {
  describe("Initialization", () => {
    it("should return an object containing a github name link and when called with the 'new' keyword", () => {
      const obj = new Engineer();
      expect("github" in obj).toEqual(true);
    });
    it("should return a string when getGithub() is called", () =>{
      expect(obj.getGithub()).toEqual('4therealm')
    });
    it('should return the employees role when called', () =>{
      expect(obj.getRole()).toEqual('Engineer')
    })

  })})