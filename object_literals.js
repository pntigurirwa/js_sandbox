const person = {
    firstrName: 'Steve',
    lastName: 'Smith',
    age: 63,
    email: 'steve@aol.com',
    hobbies: ['Music', 'Sport'], 
    address: {
        city: 'Miami',
        State: 'Fl'
    },
    getBirthYear: function (){
        return 2020 - this.age;
    }
}
let val1; 
val1 = person;

//Get specific value
val1= person.firstrName; 
val1= person['lastName'];
val1= person.hobbies[1];
val1= person.address.State;
val1=person.address['city'];
val1= person.getBirthYear();


console.log(val1);
const people= [
    {name: 'John', age: 30},
    {name: 'Mike', age: 23},
    {name: 'John', age: 30},
    {name: 'Mike', age: 23},
    {name: 'John', age: 30},
    {name: 'Mike', age: 23}
];
for (let i=0; i< people.length; i++){
    console.log(people[i].name);
}