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



// function person(fname,lname){
//   let firstname = fname;
//   let lastname = lname;

//   let getDetails_noaccess = function(){
//       return (`First name is: ${firstname} Last 
//           name is: ${lastname}`);
//   }

//   this.getDetails_access = function(){
//       return (`First name is: ${firstname}, Last 
//           name is: ${lastname}`);
//   }
// }
// let person1 = new person('Mukul','Latiyan');
// console.log(person1.firstname);
// console.log(person1.getDetails_noaccess);
// console.log(person1.getDetails_access());

// Manipulate items in an array

const originalArray = [
  'dogs',
  'cats',
  'fish',
  'ferrets',
  'snakes',
  'turtles'
];

// Map vs For Each vs For Loop

// Map
const arrayMadeWithMap = originalArray.map(item => `This item is now in a long string: ${item}`);
console.log(arrayMadeWithMap)
// For Each
const arrayMadeWithForEach = [];
originalArray.forEach(item => arrayMadeWithForEach.push(`This item is now in a long string: ${item}`));

// For Loop
const arrayMadeWithForLoop = [];
for (i=0; i < originalArray.length; i++) {
  arrayMadeWithForLoop.push(`This item is now in a long string: ${originalArray[i]}`);
}

console.log(arrayMadeWithMap === arrayMadeWithForEach && arrayMadeWithMap === arrayMadeWithForLoop);

// Other manipulations

// Filter
const filteredArray = originalArray.filter(item => item !== 'fish')

//filters out fish from the original array
console.log(filteredArray)

// Reduce

const numbersArray = [0,1,2,3,4,5,6,7,8,9,10]
const reduction = numbersArray.reduce( (totalValue, currentValue) => totalValue + currentValue)

// adds all the numbers together
console.log(reduction)







//======================================================================
/*

Working with complex data types is a key ingredient to being a solid coder. Here are some activities to help you. Some of these activities can be done in a single line of code, others maybe not. First and foremost the goal is to solve the problem. Then you can try and refactor if you want to.

Given this array of objects:
*/

const arrOfObjs = [
  { id: 1, name: "Mary", age: 35, occupation: "Engineer", salary: 120000, location: "Seattle" },
  { id: 2, name: "Jack", age: 30, occupation: "Salesperson", salary: 70000, location: "Cleveland" },
  { id: 3, name: "Dan", age: 28, occupation: "Store Owner", salary: 135000, location: "Dallas" },
  { id: 4, name: "Rachel", age: 40, occupation: "VP", salary: 220000, location: "Nashville" },
  { id: 5, name: "Emmet", age: 44, occupation: "Electrician", salary: 108000, location: "Pensacola" },
  { id: 6, name: "Diane", age: 32, occupation: "Teacher", salary: 88000, location: "Phoenix" }
];

/* ----------------------------------------------------------------------------
1. Console.log Rachel's location, when all you know is the name of the array 
of Objects and that Rachel's is the fourth record in the array. (You're not 
using any array methods here, just navigating through the structure.)
--------------------------------------------------------------------------- -*/

const loc = arrOfObjs[3].location;
console.log(loc)


/* ----------------------------------------------------------------------------
2. WITHOUT using a for-loop, or a .forEach() method, age every person by one year.
--------------------------------------------------------------------------- -*/

const agedPeople = arrOfObjs.map( person => {
  return {...person, age: person.age+1 } 
})

const agedPeople2 = arrOfObjs.map( function(person) {
  return {...person, age: person.age+1 } 
})

console.log(agedPeople)



/* ----------------------------------------------------------------------------
3. Find the person with the highest salary and console.log their name.
--------------------------------------------------------------------------- -*/

const sorted = arrOfObjs.sort( (a,b) => (a.salary < b.salary) ? 1 : -1 )
console.log(sorted[0].name)

// The long way using Math.max
const arrOfSalaries = arrOfObjs.map(person => person.salary)
const maxSalaryValue = Math.max(...arrOfSalaries)
const personWithHighestSalary = arrOfObjs.find( person => person.salary === maxSalaryValue )
console.log(personWithHighestSalary)

// The really cool, short way (but not recommended unless you really understand the code)
const richPerson = arrOfObjs.find( pers => pers.salary === Math.max( ...arrOfObjs.map(person => person.salary) ) )
console.log(richPerson)



/* ----------------------------------------------------------------------------
4. Filter the array so that only those making more than 115,000 are included
--------------------------------------------------------------------------- -*/ 

const filtered = arrOfObjs.filter( person => person.salary > 115000 )
console.log(filtered)


/* ----------------------------------------------------------------------------
Quick and easy way to merge arrays
--------------------------------------------------------------------------- -*/

const arr1 = [ "bob", "mary", "alice" ];
const arr2 = [ "henry", "mary", "joe" ];

const merged = [...arr1, ...arr2];
console.log(merged)


/* ----------------------------------------------------------------------------
Here's how you can merge arrays and eliminate duplicates. A Set is a specific 
data type that does not allow duplicates. We don't use them a lot in Javascript, 
but we do have the ability to create one, as you see below.
--------------------------------------------------------------------------- -*/

const mergedAndUnique = [...new Set([...arr1,...arr2])]
console.log(mergedAndUnique)