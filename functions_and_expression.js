// FUNCTION DECLARATIONS 

function greet(firstName, lastName){
    return 'Hello!' + firstName + ' ' + lastName;
} 
// console.log(greet('John', 'Doe'));

//FUNCTION EXPRESSIONS

const square = function (x=3){
    return x*x;
}; 
// console.log(square());

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS -IIFES
// (function(){
//     console.log('IIFE Ran....')
// })();

// (function(name){
//     console.log('Hello ' + name);
// })('Prosper');

 const todo = {
     add: function(){
         console.log('Add to do..');
     }, 
     edit: function(){
         console.log(`Edit todo ${id}`);
     }
 }
 todo.delete = function(){
     console.log('Delete todo...');
 }
 todo.add();
 todo.edit(22);
 todo.delete();
