

// //strings in JavaScript // 

// //string literal declaration

// // let courseName = `Playwright` // '',`` // Address : 1000
// // let sessionName = "Playwright" // Address :1000

// // console.log(typeof courseName) // string
// // console.log(courseName === sessionName) // true

// //=== here means the value as well as the memory addres of the place where the value is stored is also the same


// //Object literal => Non-primitive datatype

// let toolName = {name:"Playwright"} // Object way of declaration // Address: 1001
// let subjectName = {name : "Playwright"} // Address : 1002

// console.log(typeof toolName) // object

// console.log(toolName===subjectName) // false

// /* **************************************************************** */


// //String Method:


// //Escape Sequence : \, \n,\t

// let input = 'It\'s a \n beautiful day' // \n => new line
// console.log(input)

// let doubQuo = "I am\ta \"double quote\"" // \t => tab 
// console.log(doubQuo);

// //string property

// //Length Property

// const courseName = "Playwright"
// console.log(courseName.length) // length is used to find the number of characters present in a string

// //concatenation => +, concat(), `${}`

// let testCase = "CreateLead";

// let testCaseNo = 123

// //"+" means old JS

// let outputPlus = testCase+testCaseNo
// console.log(outputPlus);

// //"concat()" 

// let outputConcat = testCase.concat(testCaseNo);
// console.log(outputConcat);

// //Template Literal : `${}` // Concatenation done in modern JS

// let outputTemplateLiteral = `The testcase name is ${testCase} and number is ${testCaseNo}`
// let output = "The testcase name is "+testCase+" and number is" +testCaseNo

// console.log(outputTemplateLiteral);
// console.log(output);


// //string Method


// // charAt()
// //Using the index we wil be able to find the charcater in a string

// const course = "Playwright"
// console.log(`The character present in index 2 is ${course.charAt(2)}`);


// // indexOf()
// console.log(`The index of "a" is ${course.indexOf("a")} `); // 3

// //indexOf() getting the second occurance of char "a"
// const sessionName = "Playwaright"

// console.log(`The index of "a" is ${sessionName.indexOf("a",3)} `);//5


// // substring() // Old JS way of substring

const course1 = "Playwright"

// // console.log(course1.substring(4,9)); // wrigh // index from 4-8
// console.log(course1.substring(4,10)); //wright // index from 4-9

// console.log(course1.substring(10,4)); //wright // index from 4-9

// console.log(course1.substring(10,-4)); //wright // (10,-4)==> (10,0) negative index it will be considered as 0 while executing


/* Summarize 

1. start index id included and the end index id not included 
2. start and end index is swappable
3. substring does not allow negative index*/


//slice() // Modern JS

console.log(course1.slice(4,10)); //wright // index from 4-9

console.log(course1.slice(10,4)); //"" // empty

console.log(course1.slice(-10,-6)); // Play

/* Summarize :
1. start included and end index is not included
2. start index and end index is not swappable
3. slice allows us to have negative index */

//Reason for having negative indexes

const filename = "Ravi.png"

console.log(filename.slice(4)) // here when we use postive index and when the file name changes the output varies
console.log(filename.slice(-4)) // by using negative index any filename can be accepted


//Classroom activity
//Reversal of a string and find if it is a palindrome 

//let str = "madam"


console.log(filename.split("."))









//split()