// async function myfunct() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Hello"), 1000);
//   });
//   const error = true;

//   if (!error) {
//     const res = await promise; // wait untill promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error("Something went wrong"));
//   }
// }

// myfunct()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  // Only proceed once its resolved
  const data = await response.json();
  // only proceed once second promise is resolved
  return data;
}

getUsers().then((users) => console.log(users));
