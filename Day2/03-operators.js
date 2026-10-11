

//OPerators:

// %  Modulus
let a=8%2
console.log("The modulus og 8 is ",a);


//pre-increment , post-increment and pre-decrement and post-decrement

//pre increment

// let x=10;
// console.log(++x);//11//here ++ mean 10+1 is added ones the control move from the x variable
// console.log(x);//11

//post increment

// let y=10;
// console.log(y++);//10//here ++ mean 10+1 is added ones the control move from the x variab;e
// console.log(y);//11
 

/* decrement -- */


//pre decrement

// let z=10;
// console.log(--z);//9//here ++ mean 10+1 is added ones the control move from the x variable
// console.log(z);//9

//post decrement

// let v=10;
// console.log(v--);//10//here ++ mean 10+1 is added ones the control move from the x variab;e
// console.log(v);//9


//Strict Equality and loose equality

/* 1. Strict Equality "===":
- Compare the value and 
- COmpare the datatype */


//Loose Equality "=="

/* 1. Compare the value and not the datatype */

// console.log(1===1);//true
// console.log(1==="1");//false

// console.log(1=="1");// true

// console.log(1==true); //true

//JavaScript has this mechanism called as type coercion it will convert the a boolean/string will be converted to number

//ternary operator:

//Normal if-else condtion:

// let age1 = 20;
// let message1;
// if (age1 >= 18) {
//     message1 = "You can vote!";
// } else {
//     message1 = "You cannot vote.";
// }
// console.log(message1);

/* *********** */


let age = 18;
let message = age >= 18?"You can vote!":"You cannot vote.";
console.log(message); // Output: "You can vote!"
