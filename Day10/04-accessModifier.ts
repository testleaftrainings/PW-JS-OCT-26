

class EmployeeSignUp{

public eName : string  // GLobal declaration
static eid : string
ephno : number
private eSalary : number

constructor(){
this.eName = "Ravi" 
// this.eid = "1234"
EmployeeSignUp.eid="1234"
this.ephno = 789798
this.eSalary = 123789789

}

printDetails(){

    console.log(`The emp details ${this.eName} : ${EmployeeSignUp.eid} : ${this.ephno} : ${this.eSalary}`);
    

}

get readData(){

    return this.eSalary //123789789

}

set writeData(newSal:number){

     this.eSalary = newSal
}



}

const objemp = new EmployeeSignUp()
console.log(objemp.readData)
objemp.writeData=56756575

console.log(objemp.readData)


/* accessModifiers :

1. public : can be accessed inside and outside of the class
2. private : can be accesed only within the class and not accessible outside of the class(If required we need permission  and use retreive "get" and for modifying we use "set")
3. protected : can be accessed within the class as well as the related class (example : parent - child relationship )
4. static : If we declare a property with statis we dont need an object to access that variable instead we can use the className directly
5. readonly :constant/final --> cannot change the assigned value  */