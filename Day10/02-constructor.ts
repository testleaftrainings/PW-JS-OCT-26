
//Constructor : 
// It is special method in typescript that gets executed/called/invoked at the time of object creation and it sets up the initial state of the object
// We use the keyword "constructor"


class LoginPageTest {

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

    constructor(arg:string){ // Special method // parameterized constructor

        console.log(`I am a constructor ${arg}`);
        
    }

}

 new LoginPageTest("First Method") // Creatinn object to store and retreive the methods and properties inside a class 

// const objLoginPageT = new LoginPageTest() // Creatinn object to store and retreive the methods and properties inside a class 

// objLoginPageT.launch("Chrome");
// objLoginPageT.loadurl("http://leaftaps.com/opentaps/control/main");


/* constructor:

1. We dont call it explicitly using an object of a class but gets invoked at the time of object creation.
2. The constructor is the first method that gets invoked across all the methods inside a class*/