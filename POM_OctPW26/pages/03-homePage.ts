import { Page } from "@playwright/test";
import { PWWrapper } from "../utility/playwrightWrapper";
import { LoginPage } from "./01-loginPage";


export class HomePage extends PWWrapper{
    validatePage(): Promise<void> {
        throw new Error("Method not implemented.");
    }

      constructor(page:Page){
            super(page)
        } 
        
    async clickLeads(){

         await this.page.locator('//a[(text()="Leads")]').click();
    }

     async clickAccounts(){

         await this.page.locator('//a[(text()="Accounts")]').click();
    }



}