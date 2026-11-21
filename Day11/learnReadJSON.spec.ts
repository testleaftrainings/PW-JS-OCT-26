

/* JSON => JavaScript Object Notation
CSV => Comma Seperated Values
Env => Environment file */

/* JSON structure 

{
"TCNo":"TC001",
"Username":"democsr2",
"Password":"crmsfa"
}*/


import credentials from "../../Data/login.json"

//[{TC001},{TC002}] => [0,1]

for (let index = 0; index < credentials.length; index++) {
    
console.log(credentials[index].Username);
console.log(credentials[index].Password);

}



import {test} from '@playwright/test'

for (let index = 0; index < credentials.length; index++) {
  
    test(`Learn to read JSON file ${credentials[index].TCNo}`,async ({page}) => {
    
    await page.goto("https://leaftaps.com/opentaps/control/main");

    await page.locator('//input[@id="username"]').fill(credentials[index].Username);

    await page.locator('//input[@id="password"]').fill(credentials[index].Password);

    await page.waitForTimeout(3000);

    await page.locator('//input[@class="decorativeSubmit"]').click();

    await page.locator('//a[contains(text(),"CRM")]').click();

})
    
}



/* Internally in for loop :

test("Learn to read JSON file TC001",async ({page}) => {
    
    await page.goto("https://leaftaps.com/opentaps/control/main");

    await page.locator('//input[@id="username"]').fill(credentials[0].Username);

    await page.locator('//input[@id="password"]').fill(credentials[0].Password);

    await page.waitForTimeout(3000);

    await page.locator('//input[@class="decorativeSubmit"]').click();

    await page.locator('//a[contains(text(),"CRM")]').click();


---------------------------

2nd Iteration :

test("Learn to read JSON file TC002",async ({page}) => {
    
    await page.goto("https://leaftaps.com/opentaps/control/main");

    await page.locator('//input[@id="username"]').fill(credentials[1].Username);

    await page.locator('//input[@id="password"]').fill(credentials[1].Password);

    await page.waitForTimeout(3000);

    await page.locator('//input[@class="decorativeSubmit"]').click();

    await page.locator('//a[contains(text(),"CRM")]').click();


*/