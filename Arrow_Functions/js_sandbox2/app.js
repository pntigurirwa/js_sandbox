// const sayHello = function () {
//   console.log("Hello");
// };

// const sayHello = () => {
//   console.log("Hello");
// };

// one line function does not need braces
// const sayHello = () => console.log("Hello");

// One line returns
// const sayHello = () => "Hello";

// Same as above
// const sayHello = function () {
//   return "Hello";
// };

// return object(object litral)
// const sayHello = () => ({ msg: "Helllo" });

// Single param does not need paranthesis
// const sayHello = (name) => console.log(`Hello ${name}`);

// Multiple parameters needs parathesis

// const sayHello = (firstName, lastName) =>
//   console.log(`Hello ${firstName} ${lastName}`);

// sayHello("Prosper", "NTI");

const users = ["Nathan", "John", "William"];

// const nameLengths = users.map(function (name) {
//   return name.length;
// });

// Shorter
const nameLengths = users.map((name) => {
  return name.length;
});
// Shortest
// const nameLengths = users.map((name) => name.length);

console.log(nameLengths);
