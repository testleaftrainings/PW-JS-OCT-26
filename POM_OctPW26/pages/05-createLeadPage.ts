import { Page } from "@playwright/test";
import { PWWrapper } from "../utility/playwrightWrapper";
import { LoginPage } from "./01-loginPage"
import {faker} from "@faker-js/faker"


export class CreateLeadPage extends PWWrapper{
    
    
    validatePage(): Promise<void> {
        throw new Error("Method not implemented.");
    }

      constructor(page:Page){
            super(page)
        }

async fillMadatoryFields(){

    // await this.page.locator('#createLeadForm_companyName').fill(faker.company.buzzNoun());
    // await this.page.locator('#createLeadForm_firstName').fill(faker.person.firstName())
    // await this.page.locator('#createLeadForm_lastName').fill(faker.person.lastName() )

    await this.delayedFill('#createLeadForm_companyName',faker.company.buzzNoun())
    await this.delayedFill('#createLeadForm_firstName',faker.person.firstName())
    await this.delayedFill('#createLeadForm_lastName',faker.person.lastName())
}   

async createLeadSubmitButton(){

 //   await this.page.locator('[name="submitButton"]').click()
 await this.page.locator('.smallSubmit').click()

}

}

