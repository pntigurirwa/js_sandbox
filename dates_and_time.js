let val2;

const today= new Date();
let birthday= new Date('9-10-1990 11:25:00');
birthday= new Date('September 10 1990 11:25:00');


val2 = today.getMonth();
val2 = today.getDate();
val2 = today.getDay();
val2 = today.getFullYear();
val2 = today.getHours();
val2 = today.getMinutes();
val2 = today.getSeconds();
val2 = today.getMilliseconds();

val2 = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1996);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(26);


console.log(birthday);
console.log(val2);