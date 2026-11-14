

//Using object a collection of values can be stored as key: value pair

//In JS

// let empInfo = {

//     fName : 'Ravindran',
//     eNum : 897897,
//     email :"ravi@testleaf.com"

// }

// console.log(empInfo.fName);

// In TS

let empInfo: {

    fName: string,
    eNum: number,
    active: boolean

} = {

    fName: 'Ravindran',
    eNum: 897897,
    active: true

}

console.log(empInfo.fName);