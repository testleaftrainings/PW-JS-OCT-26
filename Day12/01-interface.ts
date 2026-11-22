

//Interface are unimplemented methods which we call it as 100% abstract which is to set rules to a concrete class for implementation


export interface SwiggyRules{

    menu():void // Unimplemented / Method Signature
    acceptOrder():void
    prepareFood():void
}


export interface ZomatoRules{

    trackingOrder():void
    orderPayment():void
    
}