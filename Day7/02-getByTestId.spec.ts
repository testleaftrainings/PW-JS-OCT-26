import { test } from "@playwright/test";

test("Learn getByTestId",async ({page}) => {
    

    await page.goto("https://www.flipkart.com/search?q=iphone+17&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_2_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_2_na_na_na&as-pos=1&as-type=RECENT&suggestionId=iphone+17%7CMobiles&requestId=40968729-be29-4ab3-b3b8-0739741529cc&as-searchtext=iphone%2017")

    await page.getByTestId("MOBHQV9YDG7CGRAM").click(); 

    // here getByTestId will point towards the data-id as mentioned in the configuration file undet use:{}

    await page.waitForTimeout(3000)


})