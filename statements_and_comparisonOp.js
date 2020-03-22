// if (something){
//     do something
// } else{
//     do something else;
// }
 
const id = 100;

// //Equal to

// if(id== 101){
//     console.log('CORRECT');
// } else{
//     console.log('INCORRECT');
// }
// //Not Equal to

// if(id != 101){
//     console.log('CORRECT');
// } else{
//     console.log('INCORRECT');
// }
// //Equal to Value and Type

// if(id === 101){
//     console.log('CORRECT');
// } else{
//     console.log('INCORRECT');
// }

// //Not Equal to Value and Type

// if(id !== 101){
//     console.log('CORRECT');
// } else{
//     console.log('INCORRECT');
// }
// // Test if Undefined
// if (typeof id !== 'undefined' ){
//     console.log('The ID is ${id}');

// } else{
//     console.log('NO ID')
// }
//Equal to

// if(id>= 200){
//     console.log('CORRECT');
// } else{
//     console.log('INCORRECT');
// }

// // IF ELSE
// const color = 'Yelloow';

// if (color == 'red'){
//      console.log('Color is Red');
// }
// else if(color == 'blue'){
//     console.log('Color is Blue');
// } else {
//     console.log('Color is not Red or Blue');
// }

// LOGICAL OPERATORS
const name = 'Steve';
const age=25;

// AND &&

if (age> 0 && age < 12){
    console.log(`${name} is a child`);

}else if (age >=13 && age <= 19){
    console.log(`${name}is a Teenager`);
}else {
    console.log(`${name}is a an adult`);
}

// OR ||
if (age < 16 || age > 65){
    console.log(`${name} can not run in race`);
}else {
    console.log(`${name}is registered for the race`);
}

//TERNARY OPERATORS

console.log(id === 100 ? 'CORRECT' : 'INCORRECT')