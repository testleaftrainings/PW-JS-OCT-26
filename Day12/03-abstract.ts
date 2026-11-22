

export abstract class RestuarantActions{
//Commin methods accross all the restaurant
acceptOrder(){

    console.log("AcceptOrder");
    

}

payment(){

    console.log("Payment Done");
    

}

delivery(){

    console.log("Delivery Done");
    

}

//Unique to each restaurant hence not implemented it becomes an abstract method
abstract menu():void
}