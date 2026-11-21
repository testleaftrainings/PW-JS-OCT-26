
/* What is CSV
We will write test data in the form of Comma Seperated Values


We need to convert CSV to JSON inorder to so that we will need to install csv-parse
Coomand : npm install csv-parse*/

import { parse } from "csv-parse/sync";
import fs from "fs"

let Arraydata = parse(fs.readFileSync("Data/login.csv"))

console.log(Arraydata);

/* Output as Array of Arrays:

[
  [ 'TCNo', 'Username', 'Password' ],
  [ 'TC001', 'democsr2', 'crmsfa' ],
  [ 'TC002', 'demosalesmanager', 'crmsfa' ]
]*/

//fs => file system : used to read data from a file



let JSONdata : any = parse(fs.readFileSync("Data/login.csv"),{columns:true})

console.log(JSONdata);

console.log(JSONdata[0].Username);
console.log(JSONdata[0].Password);
