const numbers = [1, 4, 2, 8, 9];
// for(let i = 0; i < number.length; i++){

// }

for(const num of numbers){
    console.log(num);
}


const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true 
};

// for(const key of glass){
//     console.log(key);
// }



// (for in) loop only for object 
for(const key in glass){
    const value = glass[key];
    console.log(key, value);
}