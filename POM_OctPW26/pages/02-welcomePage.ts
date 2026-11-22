import { expect, Page } from "@playwright/test";
import { PWWrapper } from "../utility/playwrightWrapper";
import { LoginPage } from "./01-loginPage";


export class WelcomePage extends PWWrapper{
    
    async validatePage() {
      await expect(this.page.locator('//h2[contains(text(),"Welcome")]')).toBeVisible()
    }

      constructor(page:Page){
            super(page)
        }

        
async clickCRM(){

    await this.page.locator('//a[contains(text(),"CRM")]').click();
}


}