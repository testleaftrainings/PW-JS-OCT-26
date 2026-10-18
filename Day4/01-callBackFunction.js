

/* View youtube video :=> Main function
1. advertisment : subFunction1
2. Related Videso : sunFunction2 */



//Main Function 
function playVideo(showAdv,showRelatedVideos) {

    console.log("Play you tube video");    
    showAdv()
    showRelatedVideos()

}

//Sub Function1
function adv() {

    console.log("Play Advertisement");

}

//Sub Function2
function relateVideos() {

    console.log("Play related Videos");   

}
//Call the main function and pass the sub functions as an argument
playVideo(adv,relateVideos)
/* Play you tube video
Play Advertisement
Play related Videos */

//playVideo(relateVideos,adv)
/* Play you tube video
Play related Videos
Play Advertisement */