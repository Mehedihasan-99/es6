//  destructuring in Object 
 
 const actor = {
    name: 'hasan',
    age: 25,
    phone: 1722334455
 }

//  const name = actor.name;
//  console.log(name);


 const {name, age: boyos} = actor;
//  console.log(name);
//  console.log(boyos);


// destructuring in array 
const numbers = [44, 74, 90, 41, 71];
const [a, , b, , c] = numbers;
console.log(a);
console.log(b);
console.log(c);