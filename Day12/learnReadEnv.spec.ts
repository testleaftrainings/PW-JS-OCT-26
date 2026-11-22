

/* .env => environment files to store different environment variables , it can be url for different environment like qa,prod,uat. 
tokens, secure data password, username  */



import dotenv from "dotenv"

let filename =process.env.environFilename // $env:envfilename="qa"

console.log(filename) // prod

dotenv.config({path:`Data/${filename}.env`}) // Here we are setting the environment for execution of the script in qa environment

console.log(process.env.LFUsername) // democsr2
console.log(process.env.USERNAME) // This will help to retrieve the system environemnt

//Note : "process" is an object that comes from Node modules and helpps to retrieve data from my system / local environment

import {test} from '@playwright/test'

 
    test(`Learn to read ENV  file `,async ({page}) => {
    
    await page.goto(process.env.BaseUrl as string); // type assertion

    await page.locator('//input[@id="username"]').fill(process.env.LFUsername as string);

    await page.locator('//input[@id="password"]').fill(process.env.LFPassword as string);

    await page.waitForTimeout(3000);

    await page.locator('//input[@class="decorativeSubmit"]').click();

    await page.locator('//a[contains(text(),"CRM")]').click();

})
    

