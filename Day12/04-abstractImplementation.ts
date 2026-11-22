
import { RestuarantActions } from "./03-abstract";


class Restaurant1 extends RestuarantActions{
   
    menu(): void {
        console.log("Veg Food");
        
    }



}

const objres1 = new Restaurant1()
objres1.menu() // specific method implemented in each class
objres1.acceptOrder() // common method implemneted in abstract class






class Restaurant2 extends RestuarantActions{
    menu(): void {
      console.log("Non-veg Food");
      
    }


    
}

class Restaurant3 extends RestuarantActions{
    menu(): void {
        console.log("Snacks");
        
    }


    
}

