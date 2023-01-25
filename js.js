// //defining a class using es6
// class Vehicle {
//   constructor(name, maker, engine){
//     this.name = name;
//     this.maker = maker;
//     this.engine = engine;
//   }
//   getDetails(){
//     return(`the name of the bike is ${this.name}.`)
//   }
// }

// //using constructor to make object
// let bike1 = new Vehicle('hayabusa', 'suzuki', '1340cc')
// let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');
// console.log(bike1.name);    // Hayabusa
// console.log(bike2.maker);   // Kawasaki
// console.log(bike1.getDetails());



function person(fname,lname){
  let firstname = fname;
  let lastname = lname;

  let getDetails_noaccess = function(){
      return (`First name is: ${firstname} Last 
          name is: ${lastname}`);
  }

  this.getDetails_access = function(){
      return (`First name is: ${firstname}, Last 
          name is: ${lastname}`);
  }
}
let person1 = new person('Mukul','Latiyan');
console.log(person1.firstname);
console.log(person1.getDetails_noaccess);
console.log(person1.getDetails_access());