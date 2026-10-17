
//Objects 

const empDetails = {
    ename: "Ravindran",
    cname: "Testleaf",
    mob: 7676766
} 

console.log(empDetails.mob);

//Map is an inbuilt object that stores data in key-value pair

let learnerInfo = new Map() // Help me to create an empty object // {key:value}

console.log(typeof learnerInfo);

console.log(learnerInfo);// Map(0) {}

//Inbuilt method for Map : set(), get(), has(), delete(), clear(),
//size property

//set()

learnerInfo.set("Ravi",89899089) // creates an object
learnerInfo.set("Ram",787878787) // creates an object
learnerInfo.set("Hari",8787798) // creates an object

console.log(learnerInfo);

//get()

console.log(learnerInfo.get("Ram"))

//has()

console.log(learnerInfo.has("Ravi"));

//delete()

learnerInfo.delete("Ravi");

console.log(learnerInfo.size);

//clear()

learnerInfo.clear() //Map(0) {}
console.log(learnerInfo.size);







