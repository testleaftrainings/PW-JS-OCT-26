

const courseName2 ="Playwright"

const courseNameCollection = ["Playwright","GenAI","AI Engineering"]

/* Nature of Array in JavaScript:

1. Arrays in JS is dynamic in size it can grow or shrink in size// add or remove values inside the array
2. Heterogenous in nature// It can hold different datatypes*/

const input = [1,true,"Playwright"]

//Methods in Arrays in JS

let chars = ["a","b","c","d","e"]

//1, push(): add characters to the end of the array

chars.push("f","g","h")

console.log(chars);

/* O/p:
[
  'a', 'b', 'c',
  'd', 'e', 'f',
  'g', 'h'
]
   */

//2. pop() remove the value from the end of the array

chars.pop()
console.log(chars)

/* O/P:
[
  'a', 'b', 'c',
  'd', 'e', 'f',
  'g'
] */

//3. unshift : add values / elements to the begining of the array

chars.unshift("x","y","z")

console.log(chars)

/* O/P:
[
  'x', 'y', 'z', 'a',
  'b', 'c', 'd', 'e',
  'f', 'g'
] */


//4. shift() : remmove values from the beginning of the array

chars.shift()
console.log(chars);

/* O/P:
[
  'y', 'z', 'a',
  'b', 'c', 'd',
  'e', 'f', 'g'
]*/


//5. slice()=> extract a part of the array without modifying the original array

let arrayChars = ["a","b","c","d","e"]

const modifiedArray = arrayChars.slice(1,4)

console.log(modifiedArray) // [ 'b', 'c', 'd' ]

//6. splice()=> remove and add elements of the array

arrayChars.splice(1,4,"x","y","z","v")

console.log(arrayChars); // [ 'a', 'x', 'y', 'z', 'e' ]

//Set is a deffault object in JS that removes the duplicates in array

let num =[1,2,3,4,5,1,2,3]

const removDupli = new Set(num);//Set(5) { 1, 2, 3, 4, 5 }
console.log(removDupli);

