//An older version of the navigate() function. 
//This version checks if adjacent arrays are undefined before attempting to navigate.
//This logic is now used in the checkMovement() function.

//checkMovement() also gives users visual cues on where they can and can't move, by graying-out impermissible directions.

//As of 07/23/2018, checkMovement() assigns a boolean value to variables canMoveForward and canMoveBackward
//The newer navigate() function checks the boolean values before attempting navigation

//This function also includes logic for strafing, rather than rotating, left and right. 
//I found most users didn't make use of it, so that code is not being used right now

function navigate(direction) {

if (z === 0) {
    if (direction === "forward") {
        if (museumArray[(x - 1)][y][z] === undefined) {
            console.log("Not permitted"); 
            getLocation();
            
        } else {
            x--;
            showCoordinates();
            getLocation();
            checkMovements();
        }
    } else if (direction === "backward") {
        if (museumArray[(x + 1)][y][z] === undefined) {
            console.log("Not permitted"); 
            getLocation();
        } else {
            x++;
            console.log(x + "," + y + "," + z);
            getLocation();
            checkMovements();
        }
    } else if (direction === "left") {
        if (museumArray[x][(y - 1)][z] === undefined) {
            console.log("Not permitted"); 
            getLocation();
        } else {
            y--;
            console.log(x + "," + y + "," + z);
            getLocation();
            checkMovements();
        }
    } else if (direction === "right") {
        if (museumArray[x][(y + 1)][z] === undefined) {
            console.log("Not permitted"); 
            getLocation(); 
        } else {
            y++;
            console.log(x + "," + y + "," + z);
            getLocation();
            checkMovements();
        }
    }

} else if (z === 1) {
    if (direction === "forward") {
        if (museumArray[x][(y + 1)][z] === undefined) {
            console.log("Not permitted"); 
            getLocation(); 
        } else {
            y++;
            console.log(x + "," + y + "," + z);
            getLocation();
            checkMovements();
        }
    } else if (direction === "backward") {
        if (museumArray[x][(y - 1)][z] === undefined) {
            console.log("Not permitted");
            getLocation();
        } else {
            y--;
            console.log(x + "," + y + "," + z);
            getLocation();
            checkMovements();
        }
    } else if (direction === "left") {
        if (museumArray[(x - 1)][y][z] === undefined) {
            console.log("Not permitted");
            getLocation();
        } else {
            x--;
            console.log(x + "," + y + "," + z);
            getLocation();
        }
    } else if (direction === "right") {
        if (museumArray[(x + 1)][y][z] === undefined) {
            console.log("Not permitted"); 
            getLocation();
        } else {
            x++;
            console.log(x + "," + y + "," + z);
            getLocation();
            checkMovements();
        }
    }

} else if (z === 2) {
    if (direction === "forward") {
        if (museumArray[(x + 1)][y][z] === undefined) {
            console.log("Not permitted");  
            getLocation();
        } else {
            x++;
            console.log(x + "," + y + "," + z);
            getLocation();
            checkMovements();
        }
    } else if (direction === "backward") {
        if (museumArray[(x - 1)][y][z] === undefined) {
            console.log("Not permitted"); 
            getLocation();
        } else {
            x--;
            console.log(x + "," + y + "," + z);
            getLocation();
            checkMovements();
        }
    } else if (direction === "left") {
        if (museumArray[x][(y + 1)][z] === undefined) {
            console.log("Not permitted"); 
            getLocation();
        } else {
            y++;
            console.log(x + "," + y + "," + z);
            getLocation();
            checkMovements();
        }
    } else if (direction === "right") {
        if (museumArray[x][(y - 1)][z] === undefined) {
            console.log("Not permitted"); 
            getLocation();
        } else {
            y--;
            console.log(x + "," + y + "," + z);
            getLocation();
            checkMovements();
        }
    }

} else if (z === 3) {
    if (direction === "forward") {
        if (museumArray[x][(y - 1)][z] === undefined) {
            console.log("Not permitted");
            getLocation();
        } else {
            y--;
            console.log(x + "," + y + "," + z);
            getLocation();
            checkMovements();
        }
    } else if (direction === "backward") {
        if (museumArray[x][(y + 1)][z] === undefined) {
            console.log("Not permitted"); 
            getLocation();
        } else {
            y++;
            console.log(x + "," + y + "," + z);
            getLocation();
            checkMovements();
        }
    } else if (direction === "left") {
        if (museumArray[(x + 1)][y][z] === undefined) {
            console.log("Not permitted"); 
            getLocation();
        } else {
            x++;
            console.log(x + "," + y + "," + z);
            getLocation();
            checkMovements();
        }
    } else if (direction === "right") {
        if (museumArray[x - 1][y][z] === undefined) {
            console.log("Not permitted"); 
            getLocation();
        } else {
            x--;
            console.log(x + "," + y + "," + z);
            getLocation();
            checkMovements();
        }
    }

}

if (direction === "cw") {
    if (z === 3) {
        z = 0;
        console.log(x + "," + y + "," + z);
        getLocation();
        checkMovements();
    } else {
        z++;
     console.log(x + "," + y + "," + z);
     getLocation();
     checkMovements();
    }
}

if (direction === "ccw") {
    if (z === 0) {
        z = 3;
        console.log(x + "," + y + "," + z);
        getLocation();
        checkMovements();
    } else {
        z--;
        console.log(x + "," + y + "," + z);
        getLocation();
        checkMovements();
    }

}

};

//Another navigate function 

function navigate(direction) {

if (z === 0) {
    if (direction === "forward") {
        if (canMoveForward === false) {
            console.log("Not permitted"); 
        } else if (canMoveForward === true) {
            x--;
        }
    } else if (direction === "backward") {
        if (canMoveBackward === false) {
            console.log("Not permitted"); 
        } else if (canMoveBackward === true) {
            x++;
        }
    } 
} else if (z === 1) {
    if (direction === "forward") {
        if (canMoveForward === false) {
            console.log("Not permitted"); 
        } else if (canMoveForward === true) {
            y++;
        }
    } else if (direction === "backward") {
        if (canMoveBackward === false) {
            console.log("Not permitted");
        } else if (canMoveBackward === true) {
            y--;
        }
    }
} else if (z === 2) {
    if (direction === "forward") {
        if (canMoveForward === false) {
            console.log("Not permitted");  
        } else if (canMoveForward === true) {
            x++;
        }
    } else if (direction === "backward") {
        if (canMoveBackward === false) {
            console.log("Not permitted"); 
        } else if (canMoveBackward === true) {
            x--;
        }
    } 
} else if (z === 3) {
    if (direction === "forward") {
        if (canMoveForward === false) {
            console.log("Not permitted");
        } else if (canMoveForward === true) {
            y--;
        }
    } else if (direction === "backward") {
        if (canMoveBackward === false) {
            console.log("Not permitted"); 
        } else if (canMoveBackward === true) {
            y++;
        }
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

};  

// jQuery selectors for left/right strafing

$("#leftButton").on("click", function() {
    navigate("left");
});

$("#rightButton").on("click", function() {
    navigate("right");
});

//For now, strafing is removed, and left and right buttons rotate

// OLD/UNFINISHED CODE

// Keycodes for WASD movement, a feature I hope to add now that button navigation is working:

// w is 87
// a is 65
// s is 83
// d is 68 
// left arrow is 37 
// right arrow is 39

// //This function will draw an HTML table of the same dimensions as the array. The CSS file defines the styling of each cell.
// function mapGenerator() {
//     $("#mapContainer").append("<table></table>");
//     $("#mapContainer table").addClass("map");
    
//     for (i = 0; i <= museumArray.length - 1; i++) {
//         $(".map").append("<tr></tr>");
//         $(".map tr").addClass("row");
        
//     }

//     for (j = 0; j <= museumArray[0].length - 1; j++) {
//         $(".row").append("<td></td>");
//     }

// };

// mapGenerator();

// //This function can be the starting point for a way to go through the drawn array, and apply it to the HTML table
// //The objective is to only draw the cells that the user can navigate, leaving all the undefined arrays blank
// function checkArray() {
//     for (i = 0; i <= museumArray.length - 1; i++) {
//         for (j = 0; j <= museumArray[i].length - 1; j++) {
//             if (museumArray[i][j][0] === undefined) {
//                 console.log("undefined");
//             } else {
//                 console.log("defined");
//             }
//         }
//     }
// };