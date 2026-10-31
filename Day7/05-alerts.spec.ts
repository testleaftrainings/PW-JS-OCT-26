
import { test } from "@playwright/test";

test("Learn to interact with Modal alerts", async ({ page }) => {

    await page.goto("https://leafground.com/alert.xhtml");

    page.once("dialog", async (allAlert) => { // page.on() is the playwright listener

        console.log(allAlert.type()); //Simple, Confirm. Prompt

        console.log(allAlert.message()) // Print the message in the alert


            if(allAlert.type()==="confirm"){

                await allAlert.dismiss();

            } else{
                await allAlert.accept("TestleafPlaywright");

            }


     //   await allAlert.dismiss();



    }) // this line enables the listener in playwright

    /* 
    Initially when there was no listener attached, the playwright has the control and interacted by default 
    When we add a listner page.on we are confirming playwright that we are going to take control of all the alerts that pops up */

    await page.locator('(//span[text()="Show"])').first().click();
    await page.waitForTimeout(3000) // demo purpose

    await page.locator('(//span[text()="Show"])[2]').click();
    await page.waitForTimeout(3000) // demo purppose

    await page.locator('(//span[text()="Show"])[5]').click();
    await page.waitForTimeout(3000) // demo purppose




})

/* page.once means we are given control of only one alert out of 3 balance 2 playwright will take control */