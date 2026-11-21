import { LoginPage } from "./01-loginPage";

export class ViewLeadPage extends LoginPage{

async verifyFirstName(){

    const fName = await this.page.locator('#viewLead_firstName_sp').innerText();

    console.log(fName);
    

}

}