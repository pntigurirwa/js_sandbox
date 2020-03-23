// FOR LOOP 

// for (let i= 0; i<10; i++){
//     if(i==2){
//         console.log('twois my favorite number');
//         continue;
//     }

//     if (i==5){
//         console.log('stop the loop');
//         break;
//     }
//     console.log('Number ' +i);
// }

// WHILE LOOP

// let i = 0 ;

// while (i<10){
//     console.log('Number  ' +i);
//     i++;
// }

//DO WHILE
// let i = 0;
// do{
//     console.log('Number ' +i);
//     i++;
// }
// while(i<10);

//LOOP THROUGH ARRAY
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for (let i=0; i<cars.length; i++){
//     console.log(cars[i]);
// }
// // FOREACH
// cars.forEach(function(car){
//     console.log(car);
// });

//MAP

const users =[
    {id:1, name:'John'},
    {id:2, name:'Sara'},
    {id:1, name:'John'},
    {id:1, name:'John'},
    {id:1, name:'John'}
];
const ids = users.map(function(user){
   return user.id;  
});
console.log(ids);
