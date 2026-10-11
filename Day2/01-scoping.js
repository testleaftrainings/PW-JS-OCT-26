//How var,let and const behaves in various scopse

//1. FUnction Scope
//2. Block Scope

/* --------------------------- */

//1. Function Scope in var

// function addition() {

//     var a = 10;
//     var b = 20;
//     var c = a + b;

// }

// console.log("Addition of a and b with a function block", c);

// addition()

//When we declare a variable using var keyword inside a function block ir is nit accessible outiside the function block
//Hence we call it as Function Scoped Variable

/* ********let function scoped********** */

//2. Function Scope in let

// function addition() {

//     let a = 10;
//     let b = 20;
//     let c = a + b;

// }

// console.log("Addition of a and b with a function block", c);

// addition()

//When we declare a variable using let keyword inside a function block it is not accessible outiside the function block
//Hence we call it as Function Scoped Variable

/* ********const function scoped********** */

//3. Function Scope in const

// function addition() {

//     const a = 10;
//     const b = 20;
//     const c = a + b;

// }

// console.log("Addition of a and b with a function block", c);

// addition() //ReferenceError: c is not defined

//When we declare a variable using let keyword inside a function block it is not accessible outiside the function block
//Hence we call it as Function Scoped Variable


//COnclusion:

//Here var, let and const are function scoped



/* ************************BLOCK SCOPED(IF,ELSE,FOR,WHILE.. CONDITON)*************************************** */

//Block scope using var keyword

// if(true){

// var x=123

// }


// console.log("The variable declared in if block using var",x);

//var is not a block scoped it is only function scoped
//var does not have the characteristics to hold data inside an if block it tends to leak data outside 
//The above characteristic makes it unreliable to be used in programming lang.


//Block scope using let keyword

if(true){

let x=123

}


console.log("The variable declared in if block using let",x);

//let is a block scoped as well as function scoped
//let has the characteristics to hold data inside an if block 
//The above characteristic makes it reliable to be used in programming lang.

//Block scope using const keyword

if(true){

const x=123

}

console.log("The variable declared in if block using const",x);

//const is a block scoped as well as function scoped
//const has the characteristics to hold data inside an if block 
//const above characteristic makes it reliable to be used in programming lang.



/* Conclusion
1. var keyword in JS is function scoped but not block scoped.(if,for,...)
2. let keyword in JS is function scoped as well as block scoped.
3. const keyword in JS is function scoped as well as block scoped.

*/