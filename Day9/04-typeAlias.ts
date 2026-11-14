//Type Alias - Union Type

//let usernameTextbox : string = "hello@testleaf.com"

type usernameTextbox = number | string | undefined// Here usernameTextbox is an alias name for the combination of 2 kinds of datatype and they are number or string

let usernameEmail : usernameTextbox = "hello@testleaf.com"

let usernamePhone : usernameTextbox = 78787998

let usernameUndefined : usernameTextbox = undefined


// We can also handle different values

type supportedBrowser = "chrome" | "firefox" | "msedge"

function invokeBrowser(browserName:supportedBrowser){

    if (browserName==="chrome") {
        console.log("Launch the chrome browser");
        
    } else {
        console.log("Unknown browser type");        
    }
}

invokeBrowser("chrome")

//  Intersection TypeAlias


type admin ={
    adminName : string,
    privelges : string[]
}

type employee ={
    empName : string,
    doj : string,
    empId : number
}

type qa = admin & employee

const qaProfile : qa ={

adminName:"Testleaf",
privelges:["admin"],
empName:"Ravi",
doj:"14/11/26",
empId : 1234

}

console.log(qaProfile.adminName);




// action: "click" | "fill",
//         data: string = ""


// type fillAction = "fill" & "!data"

// let action
//  if ( action : fillAction) {
//             throw new Error("Data must be provided for the 'fill' action.");
//         }
