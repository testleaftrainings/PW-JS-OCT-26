

import { test } from "@playwright/test";

test("Learn to handle windows", async ({ page, context }) => {

    await page.goto("https://www.flipkart.com/");

    // await page.getByPlaceholder('Search for Products, Brands and More',{exact:true}).first().fill("iPhone");

    // await page.getByPlaceholder('Search for Products, Brands and More',{exact:true}).first().press("Enter");

    const searchBox = page.getByPlaceholder('Search for Products, Brands and More', { exact: true }).first();

    searchBox.fill("iPhone");

    searchBox.press("Enter");

    /* Notes on window handing:
2 types of window handling :
1. SEQUENTIAL WAY
2. CONCURRENT WAY*/

/* *********************SEQUENTIAL METHOD************************************************ */

    // const pagePromise = context.waitForEvent("page") // In this line the listner present to capture the page that gets poped up

    // // context is the link between the 2 tabs/pages that is the reason we are usinf context to invoke a listner

    // await page.getByText('Apple iPhone 17 (Black, 256 GB)', { exact: true }).first().click();

    // const childPageRef = await pagePromise // Post the click action the listner performs the task and the promise is being resolved


    /* ********************CONCURRENT METHOD************************************************* */

    //await Promise.all([ACTION1(LISTENER), ACTION2(CLICK)])

    // const childPageRef =  await Promise.all([context.waitForEvent("page"),page.getByText('Apple iPhone 17 (Black, 256 GB)', { exact: true }).first().click()])
    
    //[page,void] ==> [0,1]

    //ARRAY DESTRUCTOR : By adding a square bracket in the LHS variable the void return type is ignorned
    
    // CHILD PAGE ONE
    
    const [childPageRef1] =  await Promise.all([context.waitForEvent("page"),page.getByText('Apple iPhone 17 (Black, 256 GB)', { exact: true }).first().click()])

    await childPageRef1.waitForLoadState("domcontentloaded");

    const childPage1Title = await childPageRef1.title();

    await page.waitForTimeout(5000) // demo purpose

    console.log(childPage1Title); // Here the control stays in child window

    await page.waitForTimeout(5000) // demo purpose

    /***************SECOND CHILD PAGE (HANDLE MUTIPLE PAGES)********************/

    const [childPageRef2] =  await Promise.all([context.waitForEvent("page"),page.getByText('Apple iPhone 17 (Lavender, 256 GB)', { exact: true }).first().click()])

     await childPageRef2.waitForLoadState("domcontentloaded");

    const childPage2Title = await childPageRef2.title();

    await page.waitForTimeout(5000) // demo purpose

    console.log(childPage2Title); // Here the control stays in child window

    /* *********************************************************************** */

    console.log(await page.title()) // Here since the reference of page is used the control is in parent window

    // await page.bringToFront(); // This method will bring the parent page to the front

    await page.locator('//span[text()="Electronics"]').click();

    await page.waitForTimeout(3000) // demo purpose

})


/* Three page references:
1. page
2. childPageRef1
3. childPageRef2 */