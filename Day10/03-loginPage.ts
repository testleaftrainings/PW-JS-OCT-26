import { Page } from "@playwright/test"

export class LoginPageSample {

    LFpage: Page // Global declaration/property so that it is accessible accross all the methods used inside the class

    constructor(pg: Page) {

        this.LFpage = pg // RHS page ref. /fixture ref we got from .spec.ts file

    }

    async loadurl(url: string) {

        await this.LFpage.goto(url);


        // console.log(`Loading the URL : ${this.url}`);
        console.log(`Loading the URL : ${url}`);

    }

    async credential(usr: string, pwd: string) {

        await this.LFpage.locator('//input[@id="username"]').fill("democsr2");

        await this.LFpage.locator('//input[@id="password"]').fill("crmsfa");

        console.log(`Credentials username : ${usr} and ${pwd}`);

        await this.LFpage.waitForTimeout(3000) // for demo
    }

    async clickLogin() {

        await this.LFpage.locator('//input[@class="decorativeSubmit"]').click();


        console.log(`Click Submit `);

         await this.LFpage.waitForTimeout(3000) // for demo
    }



}


