///<reference types="node" />

/* FileUpload 2 ways to do depending on the DOM tag and attribute availability:

1. When the DOM has input tag and type="file" attribute refering the button we are going to interact 

2. When the DOM does not have an input tag and type="file" attribute referring the button we are to interact then we use listner concept*/


import { test } from "@playwright/test";

import path from "path";

//Here the file is injected into the webelement because of input and type="file"

test("Learn to upload file when input tag and type='file' present in DOM", async ({ page }) => {


    await page.goto("https://leafground.com/file.xhtml");

    await page.locator('//input[@type="file"]').first().setInputFiles([path.join(__dirname, "../../Data/TestLeaf Logo.png")]);

    await page.waitForTimeout(5000) // for demo

})


//FIle upload method -2 when no input tag and type="file" attribute is present

//We will use listner concept

test.only("Learn to upload file when we don't have input tag and type='file' present in DOM", async ({ page }) => {


    await page.goto("https://the-internet.herokuapp.com/upload");

    const fileUploadPromise = page.waitForEvent('filechooser') // Here the listner is activated ones the upload button is clicked

    await page.locator('[id="drag-drop-upload"]').click();

    const fileUploadRef = await fileUploadPromise

    fileUploadRef.setFiles([path.join(__dirname, "../../Data/TestLeaf Logo.png")])

    await page.waitForTimeout(5000) // for demo


})