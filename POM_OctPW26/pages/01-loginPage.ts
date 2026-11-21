import { Page } from "@playwright/test"

export class LoginPage {

    page: Page // Global declaration/property so that it is accessible accross all the methods used inside the class

    constructor(pg: Page) {

        this.page = pg // RHS page ref. /fixture ref we got from .spec.ts file

    }

    async loadurl(url: string) {

        await this.page.goto(url);


        // console.log(`Loading the URL : ${this.url}`);
        console.log(`Loading the URL : ${url}`);

    }

    async credential(usr: string, pwd: string) {

        await this.page.locator('//input[@id="username"]').fill("democsr2");

        await this.page.locator('//input[@id="password"]').fill("crmsfa");

        console.log(`Credentials username : ${usr} and ${pwd}`);

        await this.page.waitForTimeout(3000) // for demo
    }

    async clickLogin() {

        await this.page.locator('//input[@class="decorativeSubmit"]').click();


        console.log(`Click Submit `);

         await this.page.waitForTimeout(3000) // for demo
    }



}


