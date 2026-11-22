import { Page } from "@playwright/test";
import { PWWrapper } from "../utility/playwrightWrapper";
import { LoginPage } from "./01-loginPage";


export class LeadPage extends PWWrapper{
    validatePage(): Promise<void> {
        throw new Error("Method not implemented.");
    }

      constructor(page:Page){
            super(page)
        }

async clickCreateLead(){

await this.page.locator('//a[(text()="Create Lead")]').click()

}


}