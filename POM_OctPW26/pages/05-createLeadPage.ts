import { LoginPage } from "./01-loginPage"


export class CreatLeadPage extends LoginPage{

async fillMadatoryFields(){

    await this.page.locator('#createLeadForm_companyName').fill("Testleaf");
    await this.page.locator('#createLeadForm_firstName').fill("Ravindran")
    await this.page.locator('#createLeadForm_lastName').fill("R")


}

async createLeadSubmitButton(){

    await this.page.locator('[name="submitButton"]').click()

}

}