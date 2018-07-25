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

var museumArray = [

[ [          ], [          ], [          ], [          ] ],
[ [          ], [          ], [0, 1, 2, 3], [          ] ],
[ [          ], [          ], [0, 1, 2, 3], [          ] ],
[ [          ], [0, 1, 2, 3], [0, 1, 2, 3], [          ] ],
[ [          ], [0, 1, 2, 3], [0, 1, 2, 3], [          ] ],
[ [          ], [          ], [0, 1, 2, 3], [          ] ],
[ [          ], [          ], [          ], [          ] ]

];

var x = 5;
var y = 2;
var z = 0;

var direction;

var canMoveForward;
var canMoveBackward;

var moveForwardYes = ((direction === "forward") && (canMoveForward === true));
var moveBackwardYes = ((direction === "backward") && (canMoveBackward === true));

infoPackage();

// GLOBAL VARIABLES AND FUNCTIONS END

function showCoordinates() {
    console.log(x + "," + y + "," + z);
};

// Check if an adjacent array is out-of-bounds

function checkMovements() {

    if (z === 0) {
        if (museumArray[(x - 1)][y][z] === undefined) {
            buttonStatus("#forwardButton", "off");
            canMoveForward = false;
        } else {
            buttonStatus("#forwardButton", "on");
            canMoveForward = true;
        }

        if (museumArray[(x + 1)][y][z] === undefined) {
            buttonStatus("#backwardButton", "off");
            canMoveBackward = false;
        } else {
            buttonStatus("#backwardButton", "on");
            canMoveBackward = true; 
        }
    }

    if (z === 1) {
        if (museumArray[x][(y + 1)][z] === undefined) {
            buttonStatus("#forwardButton", "off");
            canMoveForward = false;
        } else {
            buttonStatus("#forwardButton", "on");
            canMoveForward = true;
        }

        if (museumArray[x][(y - 1)][z] === undefined) {
            buttonStatus("#backwardButton", "off");
            canMoveBackward = false;
        } else {
            buttonStatus("#backwardButton", "on");
            canMoveBackward = true;
        }
    }

    if (z === 2) {
        if (museumArray[(x + 1)][y][z] === undefined) {
            buttonStatus("#forwardButton", "off");
            canMoveForward = false;
        } else {
            buttonStatus("#forwardButton", "on");
            canMoveForward = true;
        }

        if (museumArray[(x - 1)][y][z] === undefined) {
            buttonStatus("#backwardButton", "off");
            canMoveBackward = false;
        } else {
            buttonStatus("#backwardButton", "on");
            canMoveBackward = true;
        }
    }

    if (z === 3) {
        if (museumArray[x][(y - 1)][z] === undefined) {
            buttonStatus("#forwardButton", "off");
            canMoveForward = false;
        } else {
            buttonStatus("#forwardButton", "on");
            canMoveForward = true;
        }

        if (museumArray[x][(y + 1)][z] === undefined) {
            buttonStatus("#backwardButton", "off");
            canMoveBackward = false;
        } else {
            buttonStatus("#backwardButton", "on");
            canMoveBackward = true;
        }
    }
};

// Provide visual cues to user for whether they can or can't move in a certain direction
// Here, the visual cue is a grayed-out button

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
    checkMovements();
    getLocation();
};

// jQuery selectors for navigation buttons

$("#forwardButton").on("click", function() {
    direction = "forward";
    navigate(direction);
});

$("#backwardButton").on("click", function() {
    direction = "backward";
    navigate(direction);
});

$("#leftButton").on("click", function() {
    direction = "ccw";
    navigate(direction);
});

$("#rightButton").on("click", function() {
    direction = "cw";
    navigate(direction);
});

$(document).on("keydown", function(event) {
    
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

    if (((direction === "forward") && (canMoveForward === true)) || ((direction === "backward") && (canMoveBackward === true))) {
        console.log("footsteps");
    } else if ((direction === "ccw") || (direction === "cw")) {
        console.log("little footsteps");
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

function getLocation() {
    if ((x === 5) && (y === 2)) {
        console.log("You are in the front yard.");
        $("#xyCoordinateText").html("You are in the front yard.");
        if (z === 0) {
            console.log("You are facing towards the front door.");
            $("#picture").attr("src", "images/x5y2z0.JPG");
        } else if (z === 1) {
            console.log("You are looking west on Simpson Street toward Public Road.");
        } else if (z === 2) {
            console.log("You are facing away from the front door.");
        } else if (z === 3) {
            console.log("You are looking east on Simpson Street, toward the historic business district.");
        } 
    }

    if ((x === 4) && (y === 1)) {
        console.log("You are in the business exhibit.");
        $("#xyCoordinateText").html("You are in the business exhibit.");
        if (z === 0) {
            console.log("You are facing towards our upcoming Notable Persons exhibit.");
            $("#picture").attr("src", "images/x4y1z0.JPG");
        } else if (z === 1) {
            console.log("You are facing towards the foyer.");
            $("#picture").attr("src", "images/x4y1z1.JPG");
        } else if (z === 2) {
            console.log("You are facing our historic businesses exhbit, and the harmonium.");
            $("#picture").attr("src", "images/x4y1z2.JPG");
        } else if (z === 3) {
            console.log("You are looking towards the window.");
            $("#picture").attr("src", "images/x4y1z3.JPG");
        } 

    }

    if ((x === 4) && (y === 2)) {
        console.log("You are in the foyer.");
        $("#xyCoordinateText").html("You are in the foyer.");
        if (z === 0) {
            console.log("You are facing toward the mining equipment exhibit. You can see the house's original colonade feature, and above it, the check tag board from the Black Diamond Mine.");
            $("#picture").attr("src", "images/x4y2z0.JPG");
        } else if (z === 1) {
            console.log("You are facing towards our displays for Lafayette High School, the Great Snowstorm of 1913, and the Lafayette Elementary fire of 1964");
            $("#picture").attr("src", "images/x4y2z1.JPG");
        } else if (z === 2) {
            console.log("You are facing toward Simpson Street. You can see a display on the Lewis House, and the Black Diamond Mine");
            $("#picture").attr("src", "images/x4y2z2.JPG");
        } else if (z === 3) {
            console.log("You are looking toward our Dr. Wolf bookcase, and the business exhibit.");
            $("#picture").attr("src", "images/x4y2z3.JPG");
        } 
    }

    if ((x === 3) && (y === 1)) {
        console.log("You are in the high school exhibit.");
        $("#xyCoordinateText").html("You are in the high school exhibit.");
        if (z === 0) {
            console.log("You are facing towards our Johnny Manazanares Trophy case. These trophies were won by Lafayette High Students.");
            $("#picture").attr("src", "images/x3y1z0.JPG");
        } else if (z === 1) {
            console.log("You are looking back toward the mining equipment room. On the right are two baseball jerseys from Lafayette's past.");
            $("#picture").attr("src", "images/x3y1z1.JPG");
        } else if (z === 2) {
            console.log("You are looking towards our TV, where we show the short, two-part documentary Stories of Lafayette.");
            $("#picture").attr("src", "images/x3y1z2.JPG");
        } else if (z === 3) {
            console.log("You are looking at our sliding display, with a collection of facts and photos from city history.");
            $("#picture").attr("src", "images/x3y1z3.JPG");
        }    
    }

    if ((x === 3) && (y === 2)) {
        console.log("You are in the mining equipment exhibit.");
        $("#xyCoordinateText").html("You are in the Mining Equipment Exhibit.");
        if (z === 0) {
            console.log("You are facing towards our scale model of the Simpson Mine, and displays about historic Lafayette mines.");
            $("#picture").attr("src", "images/x3y2z0.JPG");
        } else if (z === 1) {
            console.log("You are facing towards our maps of Lafayette coal mines, and a mining tool display.");
            $("#picture").attr("src", "images/x3y2z1.JPG");
        } else if (z === 2) {
            console.log("You are looking back towards the foyer.");
            $("#picture").attr("src", "images/x3y2z2.JPG");
        } else if (z === 3) {
            console.log("You are looking at our upright mine tool display, featuring hard hats, lanterns, and samples of coal. To the right of the case, you may enter the high school exhibit.");
            $("#picture").attr("src", "images/x3y2z3.JPG");
        }    
    }

    if ((x === 2) && (y === 2)) {
        console.log("You are in the kitchen exhibit.");
        $("#xyCoordinateText").html("You are in the kitchen exhibit.");
        if (z === 0) {
            console.log("You are looking towards our back porch, containing our farming exhibit.");
            $("#picture").attr("src", "images/x2y2z0.JPG");
        } else if (z === 1) {
            console.log("You are looking at our coffee machine, and a map of the Northern Coal Field from the late 1970s.");
            $("#picture").attr("src", "images/x2y2z1.JPG");
        } else if (z === 2) {
            console.log("You are looking at our glassware display, featuring a china set owned by town founder Mary Miller, sets of depression and carnival glass, and glass containing uranium. To the left is a doorway back to the mining equipment exhibit");
            $("#picture").attr("src", "images/x2y2z2.JPG");
        } else if (z === 3) {
            console.log("You are facing towards our restroom. The pantry is on the right.");
            $("#picture").attr("src", "images/x2y2z3.JPG");
        } 
    }

    if ((x === 1) && (y === 2)) {
        console.log("You are in the farming exhibit.");
        $("#xyCoordinateText").html("You are in the farming exhibit.");
        if (z === 0) {
            console.log("You are facing towards our museum back door. On the left is a two-man timber saw, about six feet long");
            $("#picture").attr("src", "images/x1y2z0.JPG");
        } else if (z === 1) {
            console.log("You are facing towards our farming tool display.");
            $("#picture").attr("src", "images/x1y2z1.JPG");
        } else if (z === 2) {
            console.log("On the left, a doorway leads back to the kitchen exhibit. In front of you is a wooden table, brought here by covered wagon in the 1860s.");
            $("#picture").attr("src", "images/x1y2z2.JPG");
        } else if (z === 3) {
            console.log("You are looking towards Harrison Avenue. In front of the window is a hand-powered washing machine, and to the left, along the wall, is an old wine press.");
            $("#picture").attr("src", "images/x1y2z3.JPG");
        } 
    }
};