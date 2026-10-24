

import { test } from "@playwright/test";

test("Learn CSS selectors", async ({ page }) => {

    await page.goto("https://leaftaps.com/opentaps/control/main");

    /* *************************FILL USERNAME***************************************** */ 
    //[id="username"] ===> #username

    // await page.locator('[id="username"]').fill("democsr2"); // option1

    //  await page.locator('#username').fill("democsr2"); // OPtion2

    // await page.locator('[class="inputLogin"]').nth(0).fill("democsr2"); // OPtion3

    await page.locator('[class="inputLogin"]').first().fill("democsr2"); //option4

    /* ******************************FILL PASSWORD************************************ */

    //  await page.locator('[id="password"]').fill("crmsfa"); // option1

    //  await page.locator('#password').fill("crmsfa"); // option2

    //  await page.locator('[class="inputLogin"]').nth(1).fill("crmsfa"); //Option3

    // await page.locator('[class="inputLogin"]').last().fill("crmsfa"); // option4

    await page.locator('//input[@class="decorativeSubmit"]')

    await page.locator('p>input').first().fill("crmsfa"); // Advanced CSS Example
    /* ****************************CLICK LOGIN BUTTON************************************** */

    //    await page.locator('[class="decorativeSubmit"]').click(); // OPtion1

    await page.locator('.decorativeSubmit').click(); // Option2

    await page.waitForTimeout(3000);  // for demo purpose
})