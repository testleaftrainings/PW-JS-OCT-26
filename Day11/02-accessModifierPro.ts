import { EmployeeSignUp } from "./01-accessModifier";


class EmpRavi extends EmployeeSignUp{


    constructor(){
        super()
        this.eName="Ravi"
    }

    empUpdate(){
        console.log(this.ephno)
        this.ephno=55555
        console.log(this.ephno)

    }

    printDetails(){
        console.log(`This is a child class method ${this.eName}`);          
        // super.printDetails()
        
    }



}

const objempravi = new EmpRavi()
objempravi.empUpdate()
// objempravi.printDetailsRavi()
objempravi.printDetails()

//Polymoriphism 

//Method Overiding :
//Here when we have a common method name in parent and child class the child class method overides the parent class and 
// this property is called as Method Overloading 