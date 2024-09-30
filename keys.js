const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true 
};
//  Object.keys is left side 
console.log( Object.keys(glass));


//  Object.value is right side 
console.log( Object.values(glass));


//  Object.entries is left side 
console.log( Object.entries(glass));


// delete 
// delete glass.price;
// console.log(glass);


// // delete another aways 
// const { name, ...cap} = glass;
// console.log(cap);


// freeze 
// Object.freeze(glass);
glass.price = 5000;
console.log(glass)