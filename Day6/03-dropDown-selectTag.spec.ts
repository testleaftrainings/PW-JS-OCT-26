

import { expect, test } from '@playwright/test'


test("We are to learn Xpath and handle dropdown", async ({ page }) => {

    await page.goto("https://leaftaps.com/opentaps/control/main");

    await page.locator('//input[@id="username"]').fill("democsr2");

    await page.locator('//input[@id="password"]').fill("crmsfa");

    await page.locator('//input[@class="decorativeSubmit"]').click();

    await page.locator('//a[contains(text(),"CRM")]').click();

    await page.locator('//a[text()="Leads"]').click();

    await page.locator('//a[text()="Create Lead"]').click();

    await page.locator('//input[@id="createLeadForm_companyName"]').fill("Testleaf");

    await page.locator('//input[@id="createLeadForm_firstName"]').fill("Ravindran");

    await page.locator('//input[@id="createLeadForm_lastName"]').fill('R');

    /* dropdown handling using selectOption()*/

    /* Select tag dropdown :
    1. Step1 : Identify the dropdown from the DOM using relative xpath and pass it as first argument for selectOption()
    2. Step2 : Pass the 2nd argument with the label, value or index  of the dropdown that has to be selected 
    -label
    -value 
    -index*/

    //   await page.selectOption('//select[@id="createLeadForm_dataSourceId"]',{label:"Direct Mail"}); // OPtion1 => Second Priority

    //   await page.selectOption('//select[@id="createLeadForm_dataSourceId"]',{value:"LEAD_DIRECTMAIL"}); // Option2 => First priority

    await page.selectOption('//select[@id="createLeadForm_dataSourceId"]', { index: 3 }); //Option3 => Third Priority

    /* Retriving the dropdown values  */

    let dropDownLocatorValues = page.locator('//select[@id="createLeadForm_dataSourceId"]/option'); // It holds 13<option> elements in a single variable called dropDownLocatorValues

    /* Specific dropdown selected and printed */
    const directMailValue = await dropDownLocatorValues.nth(3).innerText() // Direct Mail

    console.log(directMailValue);    //Direct Mail

    /* TO get the count */

    const dropCount = await dropDownLocatorValues.count()

    console.log(dropCount); // 13
    
    /* Generic Assertion */
    expect(dropCount).toBeGreaterThan(12)

    for (let index = 0; index < dropCount; index++) {

        const directMailValue = await dropDownLocatorValues.nth(index).innerText() // Direct Mail

        console.log(directMailValue);    //Direct Mail
    }

    await page.locator('//input[@name="submitButton"]').click();

    await page.waitForTimeout(3000); // demo purpose
})