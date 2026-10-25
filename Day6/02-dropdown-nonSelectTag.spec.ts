

import { test } from "@playwright/test";

test("Learn to Interact dropdown with non-select tag ",async ({page}) => {
    

    await page.goto('https://leafground.com/select.xhtml');

    await page.locator('//label[text()="Select Country"]').click();

    await page.locator('//li[text()="India"]').click();


})