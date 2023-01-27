const Intern = require('../classes/Intern')
const obj = new Intern('max', 5, 'thorshammermw@gmail.com', 'homeschool')
describe("intern", () => {
  describe("Initialization", () => {
    it("should return an object containing a school name when called with the 'new' keyword", () => {
      const obj = new Intern();
      expect("school" in obj).toEqual(true);
    });
    it("should return a string when getSchool() is called", () =>{
      expect(obj.getSchool()).toEqual('homeschool')
    });
    it('should return the employees role when called', () =>{
      expect(obj.getRole()).toEqual('Intern')
    })

  })})