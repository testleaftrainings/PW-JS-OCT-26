

// function browsers() {
    
// const browserName = "msedge"

// if (browserName==="chrome") {

//     console.log("This is a chrome browser");

// } else if(browserName==="msedge") {

//     console.log("This is a msedge browser");

// } else {

// console.log("This is not a supported browser for this test");

// }

// }

//browsers()

/* How to debug JS file

Method1:
1.Add breakpoints by clicking the red dot beside the line numbers
2. Click on the bug and play symbol thats the third icon in the left panel 
3. Cick on "Run and Debug from the poped up left panel" 
4. Choose Node.js from the dropdown of search from the centre searchbar of vscode
5. The theme changes to orange and turns to debug mode

Method2:
1.Add breakpoints by clicking the red dot beside the line numbers
2. Click on the down arrow present beside the + symbol of the terminal
3. Choose "debug terminal from the different terminal choices*/


//switch

function browserVersion(){

    const browser = "msedge";

    switch(browser){

        case "chrome":
            console.log("The version of chrome is 131"); 
            break;
            
        case "msedge" :
            console.log("The version of msedge is 133 ");
            break;

        default:
            console.log("Unsupported browser");
            break;     
        
            
    }

}

browserVersion()