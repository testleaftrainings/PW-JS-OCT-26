

//hoisting behaviour in var, let and const

//var x // what is the value assigned for x is undefined

// console.log(x);  
// // In JS INTERNALLY the declaration is by default taken to the top like a flag hoisted and this nature is called as hoiting in JS

// var x=10;

/* 
In other programming langauage the below code will throw error
print(x);
int x=10*/

/* ***HOISTING IN LET***** */

// //let y // what is the value assigned for x is undefined

// console.log(y);  //ReferenceError: Cannot access 'y' before initialization
// // In JS INTERNALLY the declaration is by default taken to the top like a flag hoisted and this nature is called as hoiting in JS

// let y=10;


//Here let is hoisted but the value of "y" is poiting towards a Temporal Dead Zone making to get a Reference Error

/* ***HOISTING IN CONST***** */

//let z // what is the value assigned for x is undefined

console.log(z);  //ReferenceError: Cannot access 'y' before initialization
// In JS INTERNALLY the declaration is by default taken to the top like a flag hoisted and this nature is called as hoiting in JS

let z=10;


//Here let is hoisted but the value of "y" is poiting towards a Temporal Dead Zone making to get a Reference Error



