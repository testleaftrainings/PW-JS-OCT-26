

class LoginPage {

    //Properties used : Represents the information or data related to a particular page or object
    // public browserName = "Chrome";
    // public url ="http://leaftaps.com/opentaps/control/main";
    // public username = "democsr2";
    // public password = "crmsfa";

    //method : Represents the actions or operations performed on that page or object

    launch(browserName : string) { // Now inside a class we are having method blocks to performa particular action 

//        console.log(`Launching the browser ${this.browserName}`); // Here we use this to access properties declared inside a class
// "this" keyword acts as instance of a class to access the properties inside the method
        
        console.log(`Launching the browser ${browserName}`);

    }

    loadurl(url:string) {

        // console.log(`Loading the URL : ${this.url}`);
        console.log(`Loading the URL : ${url}`);

    }

}

const objLoginPage = new LoginPage() // Creatinn object to store and retreive the methods and properties inside a class 

objLoginPage.launch("Chrome");
objLoginPage.loadurl("http://leaftaps.com/opentaps/control/main");

/* Steps to login into a page :

1. Launch the Browser
2. Load URL
3. Fill Username and Password
4. Click Submit button


function keyword 

Below are the actions performed in LoginPage :

// let url ="amazon.com"

function launch(url:string){

console.log(url)



}

launch("amazon.com")

function loadurl(url){
console.log(url)
}

loadurl("amazon.com")

function fillCredentials(){

}

fillCredentials()

function clickSubmit(){

}
clickSubmit()
*/




/* 
Concepts :
--------

Class

Object

Normal Methods
Parameterized Methods

Properties 

this keyword */