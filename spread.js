const max = Math.max(6, 45, 63, 55, 112, 52, 55);
// console.log(max); 



// when ... (3 dot ) use than go out array 
const number = [6, 45, 63, 55, 112, 52, 55];
const arrayMax = Math.max(number);
const arrayMax2 = Math.max(...number);
// console.log(arrayMax);
// console.log(arrayMax2);
// console.log(...number);


// use spread operator to copy 
const friends = [4, 7, 3, 9];
const bondhu = friends;
const dosto = [...friends];

console.log(friends);
console.log(bondhu);
console.log(dosto);
dosto.push(3);
bondhu.push(5);
console.log(friends)
console.log(bondhu)
console.log(dosto);