

/* Datatypes in TS and JS

1. number
2. bolean
3. string
4. undefined
5. null

-------------------
//Specific to TS 

6. any
7. unknown
8. tuple*/


// any datatype // loosely typed


let v : any =123 // any datatype will make a variable declaration to behave like in JS where we have dynamically typed variable
v =true
v = "Playwright"

// if(typeof v === "string"){
    v.toUpperCase()
// }
// unknown datatype  // mildely strict

let c : any ="Hello"// Here the datat comes from outside is checked firt and then utilized

// if(typeof c === "string"){
   console.log(c.toUpperCase())
// } else{
//     console.log("c is assigned with a different datatype");
    
// }



// normal TS explicit inference datatypes // very strict // statically types

let b : string =  "124"
b="Hello"

b.toUpperCase()


// tuple it is an array in typesScript

let arrayVal :[string,number,boolean] = ["Hello",123,true]