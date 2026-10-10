
//Before wrapping a function block

let a = 10;
let b = 20;
let c = a + b;

console.log("Addition of a and b without a function block", c);


//Named function // After wrapping inside a function block

function add() {

    let a = 10;
    let b = 20;
    let c = a + b;

    console.log("Addition of a and b with a function block", c);
}

add()


