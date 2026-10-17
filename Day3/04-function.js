

//1, Named Function :

//Named function // After wrapping inside a function block

function add() { // a and b are called parameters //function parmaeters

    let a = 10;
    let b = 20;
    let c = a + b;
    console.log("Addition of a and b with a function block", c);
}

add(10, 20) // passing argument while calling the named function




//2. Function expression 

const addition = function (a, b) { // a and b are called parameters //function parmaeters

    // let a = 10;
    // let b = 20;
    return c = a + b;

   // console.log("Addition of a and b with a function expression block", c);
}

console.log(addition(20, 30)) // returns the value and prints the output outside of the function block
//addition(20, 30) // calls the named function and passes the arguments to print the output inside the function block


//3. Arrow Function // as part of evloution of JS the function name got replaced woth arrow function

const addFunction = (a, b) => { // a and b are called parameters //function parmaeters // fat arrow

    // let a = 10;
    // let b = 20;
    let c = a + b;

    console.log("Addition of a and b with a arrow function block", c);
}

addFunction(20, 30)

//Arrow function with "return" keyword :

const arrowfun = (a, b) => {

    let c = a + b
    return c
    // console.log(c);

}

/*
WHile using return keyword we are assigning the result c ot the function expresion ==> arrowfun = c   */


//arrowfun(10, 20) // we are just calling the function and c value remains inside the function itself
console.log(arrowfun(10, 20)) // here by using return we are getting the c value outside of function block