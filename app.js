// // Log to console 
// console.log('Hello World');
// console.log(123);
// console.log(true);
// var greetings= 'Hello';
// console.log(greetings);
// console.log([1,2,3,4,5]);
// console.log({a:1, b:2});
// console.error('this is some error');
// console.clear();
// console.warn('this is a warning');
// console.time('Hello');
//     console.log('Hello World');
//     console.log('Hello World');
//     console.log('Hello World');
//     console.log('Hello World');
//     console.log('Hello World');
//     console.log('Hello World');
//     console.log('Hello World');
//     console.log('Hello World');
// console.timeEnd('Hello');

// /*Multi Line Comments*/

// //var, let, const
// // var name ='John Doe';
// // console.log (name);
// // name='Steve Smith';
// // console.log(name);
// // //Init var
// // var greeting;
// // console.log(greeting);
// // greeting ='Hello';
// // console.log(greeting);

// // //Letter, numbers, _, $
// // //can not start with number

// // //Multi wor vars
// // var firstName='John'; //Camel case
// // var first_name ='Sara'; //Underscore
// // var FirstName = 'Tom'; //Pascal case

// //LET
// // let name ='John Doe';
// // console.log (name);
// // name='Steve Smith';
// // console.log(name);

// // CONST 
// // can not be reassign
// //HAve to assign a value

// const person = {
//     name: 'John',
//     age: 30

// }
// person.name= 'Sara';
// person.age= 32;
// // console.log(person);

// const numbers = [1,2,3,4,5,6];
// numbers.push(7);
// console.log(numbers);

// //datatypes in JavaScript
// //Primitive datatypes: Stored in the location the variable accesses stored on the stack
// // Reference Data Types: Accessed by reference, Objects that are stored on the Heap, A pointer to a location in memory

// // Six Primitive Datatypes
// /*String, Number, Boolean, Null, Undefined, Symbols(ES6) */

// //Reference Datatypes
// /*Arrays, Objects Literals, Functions, Dates, Amything Else */

// //JS is Dynamically Typed Language
// /*Types are associated with values not variables
// the same variables can hold multiple types
// we do not need to specify types
// Most other languages are statically types
// There are supersets of JS and addons to allow static typiing(Typescript, Flow)*/


// //PRIMITIVE

// //String
// const name = 'John Doe';
// //number 
// const age = 45;
// //Boolean
// const haskids= true
// //Null
// const car=null;
// //Symbol
// const sym = Symbol();

// //REFERENCE TYPES -Objects
// //Array

// const hobbies= ['movies', 'music'];

// //Object literal
// const address ={
//     city: 'Boston',
//     state: 'MA'
// }

// const today= new Date();

// console.log(typeof today);
// console.log(today);

// // TYPE CONVERSION

// let val;
// //Number to String 
// val = String (555);
// val = String(4+4);
// //Bool to String
// val= String(true);
// //Date to String
// val= String (new Date());
// //toString 
// val = (5).toString();
// val = (true).toString();
// //String to number
// val= Number ('5');
// val= Number (true);
// val =Number(false);
// val= Number (null);
// val= Number('Hello');
// val= Number([1,2,3,4]);


// val= parseInt('100.30');
// val= parseFloat('100.30');

// //Output
// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(2));


// const val1= String(5);
// const val2= 6;
// const sum= Number(val1+val2);

// console.log(sum);
// console.log(typeof sum);

// const num1= 100;
// const num2= 50;
// let val;
// //Simple Math
// val= num1+num2;
// val= num1*num2;
// val= num1-num2;
// val= num1/num2;
// val= num1%num2;

// //MAth objects
// val= Math.PI;
// val= Math.E;
// val= Math.round(2.4);
// val= Math.ceil(2.4);
// val= Math.floor(2.8);
// val= Math.abs(-3);
// val= Math.pow(8,2);
// val= Math.min(2,45,21,58,96,321,45);
// val= Math.max(2,45,21,58,96,321,45);
// val= Math.random();
// console.log(val);

// String Methods & Concatenation
// const firstName= 'William';
// const lastNAme= 'Johnson';
// const age= 36;
// let val;
// const str= 'Hello there my name is Prosper';
// val= firstName+lastNAme;
//  //Concatenation

// val= firstName+ '  ' +lastNAme;

// //Append
// val= 'Brad';
// val+= 'Traversy';
// val = 'Hello, my name is  ' +firstName+ ' and I am' +age

// //escape
// val = 'that\'s awesome, I can\'t wait';

// //Length
// val= firstName.length;

// //Concat()
// val= firstName.concat('', lastNAme);

// //Change case
// val= firstName.toUpperCase();
// val= lastNAme.toLowerCase();

// val= firstName[4];

// //Index of()
// val= firstName.indexOf('l');
// val= firstName.lastIndexOf('l');
// // charAt()
// val= firstName.charAt('2');
// //Get last Char
// val= firstName.charAt(firstName.length -1);
// //Substring
// val= firstName.substring(0,4);

// //Slice()
// val= firstName.slice(0.4)
// val = firstName.slice(-3);

// //split()
// val= str.split(' ');

// //replace
// val= str.replace('Prosper', 'Jack');

// // Includes()
// val= str.includes('foo');
// console.log(val);


//Template literals

const name= 'John';
const age= 39;
const job= 'web Developper';
const city= 'Chicago';

//Without template strings (ES5)

html= '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: '+ job + '</li><li>City:' + city + '</li><li>'

function hello(){
    return 'hello';
}
//With Templates Strings (es6)

html=`
<ul>
    <li>Name: ${name}</li>  
    <li>Age: ${age}</li> 
    <li>Job: ${job}</li> 
    <li>City: ${city}</li> 
    <li>${5+5}</li>
    <li> ${hello()}</li>  
    <li> ${age > 30 ? 'Over 30' : 'Under 30' }</li>   
`

document.body.innerHTML= html;