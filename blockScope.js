// Global Scope

var a =1;
let b=2;
const c= 3;

// function test(){
//     var a =6;
// let b=8;
// const c= 9;
// console.log('Function Scope:', a, b, c);
// }
// test();

// if(true){
//     //Block Scope
//     var a =2;
// let b=6;
// const c= 0;
// console.log('If Scope:', a, b, c);
// }

for(let a = 0; a<10; a++){
    console.log(`Function Scope: ${a}` );
}

console.log('Global Scope: ', a,b,c);