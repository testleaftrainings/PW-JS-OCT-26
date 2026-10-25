

import { expect, test } from '@playwright/test'


test("We are to learn Playwright Assertions", async ({ page }) => {

    await page.goto("https://leaftaps.com/opentaps/control/main");

    /* PAGE ASSERTIONS */

    //   await expect(page).toHaveTitle("Leaftaps - TestLeaf Automation Platform"); // Positive scenario

    // await expect(page).toHaveTitle("Sample Title"); // Negative scenario

    await expect(page).toHaveURL("https://leaftaps.com/opentaps/control/main");

    /* GENERIC ASSERTIONS / NON-RETRY ASSERTIONS*/

    const formHeading = await page.locator('//h2[text()="Leaftaps Login"]').innerText();

    console.log(formHeading); //Leaftaps Login

    expect(formHeading).toBe("Sample Heading");

    /* LOCATOR BASED ASSERTION / AUTO RETRY ASSERTIONS */

    //  await expect(page.locator('//input[@id="username"]')).toBeEditable();

    // await expect(page.locator('//input[@id="username"]')).toBeDisabled({timeout:8000});

    /* Default assertion timeout 5000 ms => It auto retried until 14 times 
       Assertion timeout increased to 8000 ms =>It auto retried until 19 times  */

    /* SOFT ASSERTIONS */

    await expect.soft(page.locator('//input[@id="username"]')).toBeDisabled({ timeout: 8000 });

    await page.locator('//input[@id="username"]').fill("democsr2");

    await page.locator('//input[@id="password"]').fill("crmsfa");

    await page.locator('//input[@class="decorativeSubmit"]').click();

    await page.locator('//a[contains(text(),"CRM")]').click();  

})