import { LoginPage } from "./01-loginPage";


export class WelcomePage extends LoginPage{

async clickCRM(){

    await this.page.locator('//a[contains(text(),"CRM")]').click();
}


}