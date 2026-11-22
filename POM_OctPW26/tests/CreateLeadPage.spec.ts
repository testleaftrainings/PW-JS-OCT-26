import { test } from "@playwright/test";
import { LoginPage } from "../pages/01-loginPage";
import { WelcomePage } from "../pages/02-welcomePage";
import { HomePage } from "../pages/03-homePage";
import { LeadPage } from "../pages/04-leadsPage";
import { CreateLeadPage } from "../pages/05-createLeadPage";
import { ViewLeadPage } from "../pages/06-viewLeadPage";
import dotenv from "dotenv";
import data from "../Data/login.json"

dotenv.config({path:"Data/prod.env"})

test("Learn Page Object Model in LoginPage",async ({page}) => {
    
const objlop = new LoginPage(page)

await objlop.loadurl(process.env.BaseUrl as string)
await objlop.credential(data[0].Username, data[0].Password)
await objlop.clickLogin()

const objwp = new WelcomePage(page)
await objwp.clickCRM()

const objhp = new HomePage(page)
await objhp.clickLeads()

const objlp = new LeadPage(page)
await objlp.clickCreateLead()

const objclp = new CreateLeadPage(page)
await objclp.fillMadatoryFields()
await objclp.createLeadSubmitButton()

const objvp = new ViewLeadPage(page)
await objvp.verifyFirstName()


})

