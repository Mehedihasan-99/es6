const a =  10;
const b =  20;
// const result = 'The sum of ' + a + ' and ' + b + ' is ' + (a+b); 
const result = `The sum of ${a} and ${b} is ${a+b}`; 

console.log(result);

// wrong away for new line text 
// const email = 'Hi john' + 
// 'How are you?';

// 1.new line text with ( \n  and +) 
// const email = 'Hi john \n' + 
// 'How are you?';


// 2. new line text with ( ` `) and without + 
const email = `Hi john 
How are you?
How do you do?`;



console.log(email)

