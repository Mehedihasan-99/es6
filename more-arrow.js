const difference = (a, b) => a - b;
const multiply = (first, second, third) => first * second * third;


console.log(difference(44, 23))
console.log(multiply(4, 5, 8))


// single perameter 
const getAge = (person) => person.age;
const getName = (person) => person.name;

const student = { name: 'jalil', age: 45};
const age = getAge(student)
const name = getName(student)
console.log(age);
console.log(name);



const getThird = number => number[2];

const third = getThird([4, 6, 9, 5, 2]);
console.log(third);

// no perameter 
const getPI = () => Math.PI
console.log(getPI());

// large arrow 
const doMath = (x, y, z)=>{
    const sum = x + y + z;
    const multiply = x * y * z;
    const result = sum + multiply;
    return result;
}

const input = doMath(4, 7, 9);
console.log(input);