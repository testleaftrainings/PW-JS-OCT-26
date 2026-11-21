/* Notes :

In other pgm lang.
class Sample{

click(element:string, forceClick:boolean){
console.log("ForceClick")
}

click(element:string){
console.log("NormalCLick")
}


}

const obj = new Sample()
obj.click("#click") // Will invoke method2 because only one parameter passed
obj.click("#click",true) // Will invoke method1 because two parameter passed

Concclusion :
When we have same method names inside a class, they are invoked depending on the number of parameter passed the method will be invoked 
*/


//In typescripts we will not have 2 implementation instead we will have a single implmentation with a if else condition


class ClickActions {

    click(element:string):void
    click(element:string,forceClick:boolean):void

    click(element: string, forceClick?: boolean) {
        
        if (forceClick) {

             console.log(`ForceClick ${element}`)

        } else {

             console.log(`NormalClick ${element}`)

        }       
    }


}

const obj = new ClickActions()
//obj.click("#click") // Will invoke method2 because only one parameter passed
obj.click("#click",true) // Will invoke method1 because two parameter passed