// without default value 
// function add(num1, num2){
//     const result = num1 + num2;
//     console.log(num1, num2, result);
//     return result;
// }

// const sum = add(4, 8);
// console.log(sum);


// set default value 

function add(num1=0, num2=5){
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}

const total = add(4);
const total1 = add(6,8);
const total2 = add(6);
// console.log(sum);

    // // Default Value 
    // 1. number = ( add hole 0), (multi hole 1)
    // 2. string = " " emty string
    // 3. boolean = true / false
    // 4. object = { } enty object
    // 5. Array = [ ] emty array