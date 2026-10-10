
//var,let and const behaviour

//var was introduced when it was a scripting lanuage 1990's

//Declaration in var

var testleafPhno // memory created for a variable

//redeclaration

var testleafPhno 

// In normal programing language redeclaration is not allowed just like a phone not allowing you to create a duplicte contact name

//Assignment
testleafPhno = 789798789

//Reassignment is allowed in var key word
testleafPhno = 3434343443 
console.log(testleafPhno);

/* ****************************let ************************************* */


//let was introduced in ES6 version to align with the characteristics of other programming languages

//Declaration in let 
//let contactNumber


//Redeclaration is not allowed in let variable
//let contactNumber // SyntaxError: Identifier 'contactNumber' has already been declared


//assignemnt in let 

let acountBalance // declaration opening a memeory location
acountBalance = 8798789987 // assignment // assigning a valur to the variable which has a memory space.


//Reassignemnt in let 
acountBalance = 6876786765




/* ****************************const ************************************* */


//int x=123
//int x=456

//const was introduced in ES6 version to align with the characteristics of other programming languages

//Declaration in const 
//const username =

//Redeclaration is not allowed in const variable
//const username // SyntaxError: Identifier 'contactNumber' has already been declared

//assignemnt in const // like your accountNumber / aadhar number

const aadharNumber = 7989997979


//Reassignemnt in const 

aadharNumber = 5675585788






/* Conclusion:

1. var => decaration, redeclaration is possible and assignment, reassignment is also possible

2. let => declaration is possible whereas redeclaration is not possible and assignment is possible , reassignment is also possible. example : accounBalance

3. const => declaration is possible whereas redeclaration is not possible also assignment is possible and reassignment is not possible. example : aadharNumber */

