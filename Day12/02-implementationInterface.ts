

import {SwiggyRules, ZomatoRules } from "./01-interface";

// COncrete class

class Restaurant implements SwiggyRules,ZomatoRules { // Mutiple Inheritance

    trackingOrder(): void {
       console.log("Tracking Info");
       
    }
    orderPayment(): void {
        console.log("Payment");
        
    }
    menu(): void {
        console.log("Menu Display");
        
    }
    acceptOrder(): void {
       console.log("Accpt Order");
       
    }
    prepareFood(): void {
        console.log("Prepare food");
        
        
    } 


} 

const objres = new Restaurant()
objres.menu()