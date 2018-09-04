// A simple program for navigating a multidimensional array

//Even though I am navigating in two-dimensional space, my array has three dimensions:
//One for going up and down
//One for going side to side
//One for rotating in place


// Within the sub-sub-arrays:
//           0 = north
// west = 3     1 = east
//           2 = south

// For example, each index in the array can be an HTML img tag of a perspective in a room, 
// allowing the user to click through an area, like in the game Myst

// GLOBAL VARIABLES AND FUNCTIONS START

//Perhaps some of these need not be global?

//This array will attempt to approximate the museum where I work:

var x = 5;
var y = 2;
var z = 0;

var direction;

var canMoveForward;
var canMoveBackward;

infoPackage();

// GLOBAL VARIABLES AND FUNCTIONS END

function showCoordinates() {
    console.log(x + "," + y + "," + z);
};

function movementConditionals(isThereAWall, movementForward, movementBackward) {

    if ((movementForward === undefined) || (isThereAWall === "wall")) {
        canMoveForward = false;
    } else {
        canMoveForward = true;
    }

    if ((movementBackward === undefined) || (isThereAWall === "wall")) {
        canMoveBackward = false;
    } else {
        canMoveBackward = true;
    }
};

// Check if an adjacent array is out-of-bounds

function checkMovements(array) {

    var arrayForwardAtZ0 = array[(x - 1)][y].zArray;
    var arrayBackwardAtZ0 = array[(x + 1)][y].zArray;
    var arrayForwardAtZ1 = array[x][(y + 1)].zArray;
    var arrayBackwardAtZ1 = array[x][(y - 1)].zArray;
    var arrayForwardAtZ2 = arrayBackwardAtZ0;
    var arrayBackwardAtZ2 = arrayForwardAtZ0;
    var arrayForwardAtZ3 = arrayBackwardAtZ1;
    var arrayBackwardAtZ3 = arrayForwardAtZ1;

    var isThereAWall = array[x][y].zArray[z];

    var forwardBackwardArray = [
        [arrayForwardAtZ0, arrayBackwardAtZ0],
        [arrayForwardAtZ1, arrayBackwardAtZ1],
        [arrayForwardAtZ2, arrayBackwardAtZ2],
        [arrayForwardAtZ3, arrayBackwardAtZ3]
    ];

    for (let i = 0; i < 4; i++) {
        if (z === i) {
            movementConditionals(isThereAWall, (forwardBackwardArray[i][0]), (forwardBackwardArray[i][1]));
        }
    }
    changeButtons();
};

// Provide visual cues to user for whether they can or can't move in a certain direction
// Here, the visual cue is a grayed-out button

function changeButtons() {
    if (canMoveForward === false) {
        buttonStatus("#forwardButton", "off");
    } else if (canMoveForward === true) {
        buttonStatus("#forwardButton", "on");
    }

    if (canMoveBackward === false) {
        buttonStatus("#backwardButton", "off");
    } else if (canMoveBackward === true) {
        buttonStatus("#backwardButton", "on");
    }
}

function buttonStatus(button, onOrOff) {

    if (onOrOff === "off") {
        $(button).css("background-color", "gray");
    } else if (onOrOff === "on") {
        $(button).css("background-color", "blue");
    }
};

// These functions are called each time a player calls the navigate() function,
// so they are bundled together. 

function infoPackage() {
    navigateAudio();
    showCoordinates();
    checkMovements(museumArray);
    getLocation(museumArray);
};

// jQuery selectors for navigation buttons

$("#forwardButton").on("click", function () {
    direction = "forward";
    navigate(direction);
});

$("#backwardButton").on("click", function () {
    direction = "backward";
    navigate(direction);
});

$("#leftButton").on("click", function () {
    direction = "ccw";
    navigate(direction);
});

$("#rightButton").on("click", function () {
    direction = "cw";
    navigate(direction);
});

$(document).on("keydown", function (event) {

    console.log("You pressed the " + event.originalEvent.key + " key!");

    if ((event.originalEvent.key === "w") || (event.originalEvent.key === "ArrowUp")) {
        direction = "forward";
        navigate(direction);
    } else if ((event.originalEvent.key === "a") || (event.originalEvent.key === "ArrowLeft")) {
        direction = "ccw";
        navigate(direction);
    } else if ((event.originalEvent.key === "s") || (event.originalEvent.key === "ArrowDown")) {
        direction = "backward";
        navigate(direction);
    } else if ((event.originalEvent.key === "d") || (event.originalEvent.key === "ArrowRight")) {
        direction = "cw";
        navigate(direction);
    }
});

function navigateAudio() {

    var footsteps = new Audio();
    footsteps.src = "audio/footsteps/footsteps.mp3";
    var littleFootsteps = new Audio();
    littleFootsteps.src = "audio/footsteps/littleFootsteps.mp3";


    if (((direction === "forward") && (canMoveForward === true)) || ((direction === "backward") && (canMoveBackward === true))) {
        console.log("footsteps");
        footsteps.play();
    } else if ((direction === "ccw") || (direction === "cw")) {
        console.log("little footsteps");
        littleFootsteps.play();
    } else {
        console.log("no footsteps");
    }
};

function navigate(direction) {

    if (((direction === "forward") && (canMoveForward === false)) || ((direction === "backward") && (canMoveBackward === false))) {
        console.log("Not permitted");
    } else if (z === 0) {
        if ((direction === "forward") && (canMoveForward === true)) {
            x--;
        } else if ((direction === "backward") && (canMoveBackward === true)) {
            x++;
        }
    } else if (z === 1) {
        if ((direction === "forward") && (canMoveForward === true)) {
            y++;
        } else if ((direction === "backward") && (canMoveBackward === true)) {
            y--;
        }
    } else if (z === 2) {
        if ((direction === "forward") && (canMoveForward === true)) {
            x++;
        } else if ((direction === "backward") && (canMoveBackward === true)) {
            x--;
        }
    } else if (z === 3) {
        if ((direction === "forward") && (canMoveForward === true)) {
            y--;
        } else if ((direction === "backward") && (canMoveBackward === true)) {
            y++;
        }
    }

    if (direction === "cw") {
        if (z === 3) {
            z = 0;
        } else {
            z++;
        }
    }

    if (direction === "ccw") {
        if (z === 0) {
            z = 3;
        } else {
            z--;
        }
    }

    infoPackage();
};

// This function will give the user a message based on their position.
// The general if-statement takes two coordinates to show which cell the user is in.
// The nested if-statement shows different messages for each of the possible directions.

// This function can also be used to add ambient audio based on room, and load photos/video

function getLocation(array) {
    for (let i = 0; i < array.length; i++) {
        if (x === i) {
            for (let j = 0; j < array[i].length; j++) {
                if (y === j) {
                    $("p#xyCoordinateText").html(array[x][y].RoomText);
                    for (let k = 0; k < array[i][j].zArray.length; k++) {
                        if (z === k) {
                            $("#picture").attr("src", "images/x" + x + "y" + y + "z" + z + ".JPG");
                        }
                    }
                }
            }
        }
    }
};