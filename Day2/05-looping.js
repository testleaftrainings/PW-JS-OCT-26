
//for loop : we will be using for loop when we know the exact count of iteration

function forLoop(){

for(let i=0;i<=5;i++){ // for(initilazer; condition; increment operator)

    console.log(i);    
} 
}
forLoop()

/* ****while statement******** */

//The objective is to check the next button works fine until the last page of the google search

const nextButton = page.locator('.navgbutton'); 
while (await nextButton.isEnabled()) { // here the condition to stop the ietration is to have a false output
  await nextButton.click();
}

