

import { test } from "@playwright/test";

test("Learn playwright locators",async ({page,context}) => {

    await page.goto("https://login.salesforce.com/?locale=in");

    await page.getByRole("textbox",{name:"Username"}).fill("ravindranr.work.48306f36b5ac@agentforce.com");

    await page.getByRole("button",{name:"Log In"}).click();

    await page.getByRole("textbox",{name:"Password"}).fill("Ravi#1432");

    await page.getByRole("button",{name:"Log In"}).click();

    await page.getByTitle("App Launcher",{exact:true}).click();

    await context.storageState({path:"Data/salesforceLogin.json"})


    
})