

import { test } from "@playwright/test";

test("Learn frames",async ({page}) => {

 //   await page.goto("https://leafground.com/frame.xhtml");

    await page.goto("https://developer.servicenow.com/dev.do");

    const allFrames = page.frames();

    console.log(allFrames.length); //[frame0, frame1,frame2,frame3,frame4] // frame0==> always the main page

    //main page is considered as a page here hence the number 5 appears

  // console.log(await allFrames[0].title());


   for (let index = 0; index < allFrames.length; index++) {
    console.log(await allFrames[index].title());
   }
    
    
})