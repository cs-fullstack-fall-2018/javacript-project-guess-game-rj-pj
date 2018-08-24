// An array of selector images

var imgArray = new Array();
var riv;
var ranImage;

imgArray[0] = new Image();
imgArray[0].src = 'planet0.png';

imgArray[1] = new Image();
imgArray[1].src = 'planet1.png';

imgArray[2] = new Image();
imgArray[2].src = 'planet2.png';

imgArray[3] = new Image();
imgArray[3].src = 'planet3.png';

imgArray[4] = new Image();
imgArray[4].src = 'planet4.png';

imgArray[5] = new Image();
imgArray[5].src = 'planet5.png';

console.log(imgArray);

function randomImage()
{
    riv = Math.floor(Math.random() * imgArray.length);
    ranImage = imgArray[riv];
}


// Plays sound when either upgrade is clicked
var x = document.getElementById("myAudio");

function playAudio() {
    console.log("call me");
    x.play();
    console.log("call me")
}