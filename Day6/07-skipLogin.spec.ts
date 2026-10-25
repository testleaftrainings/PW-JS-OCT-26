

import { test } from "@playwright/test";

test.use({storageState:"Data/salesforceLogin.json"}) // This line connects the script with the cookies ,json file

test("Skip login", async ({ page }) => {

    await page.goto("https://orgfarm-231644c339-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome")

    await page.getByTitle("App Launcher", { exact: true }).click();

    await page.waitForTimeout(3000)
})