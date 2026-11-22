import { Page } from "@playwright/test";
import { PWWrapper } from "../utility/playwrightWrapper";
import { LoginPage } from "./01-loginPage";

export class ViewLeadPage extends PWWrapper{
    
    
    validatePage(): Promise<void> {
        throw new Error("Method not implemented.");
    }

      constructor(page:Page){
            super(page)
        }

async verifyFirstName(){

    
    const fName = await this.page.locator('#viewLead_firstName_sp').innerText();

    console.log(fName);
    

}

}