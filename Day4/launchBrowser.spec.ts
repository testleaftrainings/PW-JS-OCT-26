import {test,chromium, webkit} from "@playwright/test"

test("Launch Browser", async ({page})=>{

// const browser = await chromium.launch() // First action
// //const browser = await webkit.launch() // First action

// const context = await browser.newContext() // Second action : newContext() // Incognito / Inprivate session

// const page = await context.newPage()     // Third action : newPage() // blank page

await page.goto("https://www.amazon.in/");


await page.waitForTimeout(3000) // demo purpose only

})

/* Notes:
Steps to test web application 
1. Launch browser : Choose the browser name
2. New Page and Load Url



We use "await" keyword in JS to check if the particular line in the code is completed or not

Hence await returns a "promise"  
1. Pending
2. Resolve
3. Rejected

*/