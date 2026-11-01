///<reference types="node" />

import { test } from "@playwright/test";
import path from "path"

test("Learn to handle downlaoding the file",async ({page}) => {

    await page.goto("https://leafground.com/file.xhtml");

//     const filePromise = page.waitForEvent("download")

//     await page.locator('//span[text()="Download"]').click(); 

// // When we click the download button the download action gets triggered and imedialtely listener shouls capture the ref of the downloaded file

//     const downloadedFileRef = await filePromise

   const [downloadedFileRef] =  await Promise.all([page.waitForEvent("download"),page.locator('//span[text()="Download"]').click()])


    // await downloadedFileRef.saveAs("Data/PW-JS-OCT26.png"); // for customized file name
   
    //RELATIVE PATH: We dont use relative path much because the path may break due to backslash compatibility

    // await downloadedFileRef.saveAs(`Data/${downloadedFileRef.suggestedFilename()}`);  // Actual file name at the time of downloading

    //ABSOLUTE PATH:

     await downloadedFileRef.saveAs(path.join(__dirname,'../../Data/downloadedImage1.png')); // customized file name

   //  await downloadedFileRef.saveAs(path.join(__dirname,`../../Data/${downloadedFileRef.suggestedFilename()}`)); // original downloaded file

   
})

/* Note:

path.join => it joins all the path irrespective of the environment in which the code gets executed 

__dirname => The current folder path

../ => The control moves from current foolder to tests folder

../ => The control moves fron tests to PW-JS-Oct-26

Data => Means the Data folder where we need to place the file

*/