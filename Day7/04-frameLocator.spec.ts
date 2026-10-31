

import { test } from "@playwright/test";

test("Learn frames",async ({page}) => {

    await page.goto("https://leafground.com/frame.xhtml");

    //Step1: Identify the frame in which the target web element is present
    
    const frameRef =  page.frameLocator('//iframe[@src="default.xhtml"]');

    await frameRef.locator("#Click").click();

    await page.waitForTimeout(3000) // for demo


})


test.only("Learn to interact with webelements in nested frames",async ({page}) => {

    await page.goto("https://leafground.com/frame.xhtml");

    //Step1: Identify the frame in which the target web element is present
    
    const outerFrameRef = page.frameLocator('//iframe[@src="page.xhtml"]'); // Locating the outerframe

    const innerFrame = outerFrameRef.frameLocator('//iframe[@src="framebutton.xhtml"]') // LOcating the innerframe inside the outerframe

    await innerFrame.locator("#Click").click();

    // await page.locator("").click(); 

    // await outerFrameRef.locator("").click();

    await page.waitForTimeout(3000) // for demo


})