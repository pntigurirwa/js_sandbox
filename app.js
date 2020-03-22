// Log to console 
console.log('Hello World');
console.log(123);
console.log(true);
var greetings= 'Hello';
console.log(greetings);
console.log([1,2,3,4,5]);
console.log({a:1, b:2});
console.error('this is some error');
console.clear();
console.warn('this is a warning');
console.time('Hello');
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
console.timeEnd('Hello');

/*Multi Line Comments*/

//var, let, const
// var name ='John Doe';
// console.log (name);
// name='Steve Smith';
// console.log(name);
// //Init var
// var greeting;
// console.log(greeting);
// greeting ='Hello';
// console.log(greeting);

// //Letter, numbers, _, $
// //can not start with number

// //Multi wor vars
// var firstName='John'; //Camel case
// var first_name ='Sara'; //Underscore
// var FirstName = 'Tom'; //Pascal case

//LET
// let name ='John Doe';
// console.log (name);
// name='Steve Smith';
// console.log(name);

// CONST 
// can not be reassign
//HAve to assign a value

const person = {
    name: 'John',
    age: 30

}
person.name= 'Sara';
person.age= 32;
// console.log(person);

const numbers = [1,2,3,4,5,6];
numbers.push(7);
console.log(numbers);

//datatypes in JavaScript
//Primitive datatypes: Stored in the location the variable accesses stored on the stack
// Reference Data Types: Accessed by reference, Objects that are stored on the Heap, A pointer to a location in memory

// Six Primitive Datatypes
/*String, Number, Boolean, Null, Undefined, Symbols(ES6) */

//Reference Datatypes
/*Arrays, Objects Literals, Functions, Dates, Amything Else */

//JS is Dynamically Typed Language
/*Types are associated with values not variables
the same variables can hold multiple types
we do not need to specify types
Most other languages are statically types
There are supersets of JS and addons to allow static typiing(Typescript, Flow)*/


//PRIMITIVE

//String
const name = 'John Doe';
//number 
const age = 45;
//Boolean
const haskids= true
//Null
const car=null;
//Symbol
const sym = Symbol();

//REFERENCE TYPES -Objects
//Array

const hobbies= ['movies', 'music'];

//Object literal
const address ={
    city: 'Boston',
    state: 'MA'
}

const today= new Date();

console.log(typeof today);
console.log(today);