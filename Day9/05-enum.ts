

//String enums 

//const url = "http://consturl.com"

// const url = {    
//     "dev":"http://dev.com",
//     "prod":"https://prod.com",
//     "uat":"https://uat.com"
// }


enum urls {

    "dev"="http://dev.com",
    "prod"="https://prod.com",
    "uat"="https://uat.com"


}

function loadUrl(env:urls){

    console.log(`The execution result is of ${env}`);
    

}

loadUrl(urls.dev)

// /* *******NUMERIC ENUM******** */

// enum results {

//     "pass"=4, //0
//     "fail", //3
//     "skip" //2
// }

// console.log(results.skip); // 0


/* *******HETROGENOUS ENUM******** */

enum results {

    "pass"=4, //0
    "fail", //3
    "skip"="SKIPPED" //2
}

console.log(results.skip); // 0