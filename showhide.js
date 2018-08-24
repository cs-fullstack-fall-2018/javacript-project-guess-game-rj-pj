var clicks = 0;
var targets = 0;
var hits = 0;

function letsRock() {
    var theGo = document.getElementById("goGetIt");
    theGo.onclick = function () {
        // Get random number of targets and do setup
        var targetKount = document.getElementById("numberOfTargets").value;
        var targetTime = document.getElementById("displayTime").value;
        // No start the game!
        setUpTargetsAndPlay(targetKount, targetTime);
    };
}
// Utility function to get a random table cell number
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// This function gets called if player hits a target
function clickedTarget() {
    // Right now, just updates a count.
    // Could use some player feedback here
    hits += 1;


    $("td1").off("click");
    $("td2").off("click");
    $("td3").off("click");
    $("td4").off("click");
    $("td5").off("click");
    $("td6").off("click");
    $("td7").off("click");
    $("td8").off("click");
    $("td9").off("click");
    $("td10").off("click");
    $("td11").off("click");
    $("td12").off("click");
    $("td13").off("click");
    $("td14").off("click");
    $("td15").off("click");
    $("td16").off("click");
    $("td17").off("click");
    $("td18").off("click");
    $("td19").off("click");
    $("td20").off("click");
    $("td21").off("click");
    $("td22").off("click");
    $("td23").off("click");
    $("td24").off("click");
    $("td25").off("click");
    $("td26").off("click");
    $("td27").off("click");
    $("td28").off("click");
    $("td29").off("click");
    $("td30").off("click");
    $("td31").off("click");
    $("td32").off("click");
    $("td33").off("click");
    $("td34").off("click");
    $("td35").off("click");
    $("td36").off("click");
    $("td37").off("click");
    $("td38").off("click");
    $("td39").off("click");
    $("td40").off("click");
    $("td41").off("click");
    $("td42").off("click");
    $("td43").off("click");
    $("td44").off("click");
    $("td45").off("click");
    $("td46").off("click");
    $("td47").off("click");
    $("td48").off("click");
    $("td49").off("click");
    $("td50").off("click");





    $(this, ".ranImage.src").remove();
}

// The main function that sets up targets and starts a game
function setUpTargetsAndPlay(numberOfTargets, displayTimeMs) {
    clicks = 0;
    targets = numberOfTargets;
    hits = 0;
    cleanUp();
    randomImage();

    // Setup click detection for the entire table
    $("table").on("click", function () {

        clicks += 1;
        // alert("clicked. Max = " + clicks);
        if (clicks == targets) {
            alert("No more clicks! You got " + hits + " out of " + targets);
            // Turn off click detection
            // $("td").off("click");
            // $("table").off("click");
            // $(".targetImg").remove();
            cleanUp();
        }
    });

    console.log("Selecting " + targets + " targets");
    // Get the number of targets specified and randomly picks cells to display them in for the target table
    for (var x = 0; x < targets; x++) {
        var targetNum = getRandomInt(1, 50); // Pick a random table cell
        console.log("Table cell selected for target = " + targetNum);
        var tdID = "td" + targetNum;
        var imgID = "img" + targetNum;
        var seconds=(displayTimeMs*1000);

        $('#' + tdID).on("click", clickedTarget).append("<img id = " + imgID + " class= 'targetImg' src='"+ranImage.src+"'>");
        // $('#' + imgID).delay(2000).show(0);
        $('#' + imgID).delay(seconds).hide(0);
    }

}

function cleanUp() {
    $("td").off("click");
    $("table").off("click");
    $("ranImage").remove();
}