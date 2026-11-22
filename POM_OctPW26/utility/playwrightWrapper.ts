
import { expect, Page } from "@playwright/test"

export abstract class PWWrapper {

    page: Page // Global declaration/property so that it is accessible accross all the methods used inside the class

    constructor(pg: Page) {

        this.page = pg // RHS page ref. /fixture ref we got from .spec.ts file

    }


    //Reusable methods 
    async delayedFill(locator: string, data: string) {

        // await this.page.locator('//input[@id="username"]').fill(usr);
        await this.page.locator(locator).pressSequentially(data, { delay: 100 })
     //   await expect(this.page.locator(locator)).toHaveText(data)
    }

    // //Abstract Method 
    abstract validatePage():Promise<void>

}