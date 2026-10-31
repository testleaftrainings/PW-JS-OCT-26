

import { test } from "@playwright/test";

test.use({ storageState: "Data/salesforceLogin.json" })

test("Playwright Locators", async ({ page }) => {

    //     await page.goto("https://login.salesforce.com/?locale=in");

    //     const imageVisibility = await page.getByAltText("Salesforce login").isVisible();

    //     console.log(imageVisibility);

    //  //   await page.getByRole("textbox", { name: "Username" }).fill("ravindranr.work.48306f36b5ac@agentforce.com");

    //     await page.getByLabel("Username",{exact:true}).fill("ravindranr.work.48306f36b5ac@agentforce.com")

    //     await page.getByRole("button", { name: "Log In" }).click();

    // //  await page.getByRole("textbox", { name: "Password" }).fill("Ravi#1432");

    //     await page.getByLabel("Password",{exact:true}).fill("Ravi#1432")

    //    // await page.getByRole("button",{name:"Log In"}).click();

    await page.goto("https://orgfarm-231644c339-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome");

    await page.getByTitle("App Launcher", { exact: true }).click();

    await page.getByRole("button",{name:"View All Applications"}).click();

    await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Accounts");

    await page.getByText("Accounts",{exact:true}).click();

    await page.waitForTimeout(3000) // demo purpose
})