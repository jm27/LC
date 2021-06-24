// Create two symbols - are useful for creating private variables.
const username = Symbol("username");
const password = Symbol("password");

const user = {
  [username]: "Jesus Esquer",
  [password]: "12345jme",
  age: 27,
};

console.log(user.username);
console.log(user.password);
