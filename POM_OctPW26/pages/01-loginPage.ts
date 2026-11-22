import { expect,Page } from "@playwright/test"
import { PWWrapper } from "../utility/playwrightWrapper";
import { IpageActions } from "../utility/IPageActions";


export class LoginPage extends PWWrapper implements IpageActions {

    
    async validatePage(): Promise<void> {
        await expect(this.page.locator('//h2[text()="Leaftaps Login"]')).toBeVisible()
    } 
    
    
    // Concrete Class

    // page: Page // Global declaration/property so that it is accessible accross all the methods used inside the class

    // constructor(pg: Page) {

    //     this.page = pg // RHS page ref. /fixture ref we got from .spec.ts file

    // }

    constructor(page:Page){
        super(page)
    }

    async loadurl(url: string) {

        await this.page.goto(url);


        // console.log(`Loading the URL : ${this.url}`);
        console.log(`Loading the URL : ${url}`);

    }

    async credential(usr: string, pwd: string) {

        // await this.page.locator('//input[@id="username"]').fill(usr);
        // await this.page.locator('//input[@id="password"]').fill(pwd);

       await this.delayedFill('//input[@id="username"]',usr)
       await this.delayedFill('//input[@id="password"]',pwd)

        await this.page.waitForTimeout(3000) // for demo
    }

    async clickLogin() {

        await this.page.locator('//input[@class="decorativeSubmit"]').click();


        console.log(`Click Submit `);

         await this.page.waitForTimeout(3000) // for demo
    }



}


