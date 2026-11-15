

import { test } from "@playwright/test";
import { LoginPageSample } from "./03-loginPage";

test("Learn Page Object Model in LoginPage",async ({page}) => {
    
const objlp = new LoginPageSample(page)

await objlp.loadurl("http://leaftaps.com/opentaps/control/main")
await objlp.credential("democsr2", "crm")
await objlp.clickLogin()




})