$(document).on("click", "#submitButton", function () {
            console.log("test");

            //Key for the Google API:
            // var APIKey = "AIzaSyB-cP9CrYbHOtYNDY2_aNHIzDjR3DvHjwE";


            //Declaring the Giphy API's query URL as a variable, incorporating our API key and search term
            //The "&limit5" will produce 5 results per click
            // var queryURL = "https://roads.googleapis.com/v1/snapToRoads?path=-35.27801,149.12958|-35.28032,149.12907|-35.28099,149.12929|-35.28144,149.12984|-35.28194,149.13003|-35.28282,149.12956|-35.28302,149.12881|-35.28473,149.12836&interpolate=true&key=" + APIKey;
            var parameters = "placeId=ChIJX12duJAwGQ0Ra0d4Oi4jOGE&placeId=ChIJLQcticc0GQ0RoiNZJVa5GxU";
            var queryURL = "https://roads.googleapis.com/v1/speedLimits?" + parameters + "&key=" + APIKey;

            console.log(queryURL);

});

var x;

var y;

var coordinateArray = [{name: "denverUnionStation", xCoordinate: 39.75, yCoordinate: -105.00}];

function getLocation() {

    console.log("Location obtained");
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else { 
        $("#location").html("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    x = position.coords.longitude;
    y = position.coords.latitude;
    console.log(typeof x);
    $("#location").html("Latitude: " + "<span id='xPos'>" + x.toFixed(2) + "</span>" + 
    "<br>Longitude: " + "<span id='yPos'>" + y.toFixed(2) + "</span>"); 
    console.log("test");
};

getLocation();

var newX = $("#xPos");
var oldX;
var newY = $("#yPos");
var oldY;

function newValues() {

    oldX = newX;
    newX = $("#xPos")
    oldY = newY;
    newY = $("#yPos")

    direction();
    
};

setInterval(newValues, 60000);

//oldX is the x-coordinate from an old position, newX is the updated value. Ditto for oldY and newY
function direction() {

    if ((newX > oldX) && (newY === oldY)) {
        direction = "east";
        $("#direction").html(direction);
    } else if ((newX < oldX) && (newY === oldY)) {
        direction = "west";
        $("#direction").html(direction);
    } else if ((newX === oldX) && (newY > oldY)) {
        direction = "north";
        $("#direction").html(direction);
    } else if ((newX === oldX) && (newY < oldY)) {
        direction = "south";
        $("#direction").html(direction);
    } else if ((newX > oldX) && (newY > oldY)) {
        direction = "northeast";
        $("#direction").html(direction);
    } else if ((newX > oldX) && (newY < oldY)) {
        direction = "southeast";
        $("#direction").html(direction);
    } else if ((newX < oldX) && (newY < oldY)) {
        direction = "southwest";
        $("#direction").html(direction);
    } else if ((newX < oldX) && (newY > oldY)) {
        direction = "northwest";
        $("#direction").html(direction);
    } 
}

//This code looks for changes in the second decimal point, which, on a map, is accurate to 1.1 KM, or .68 miles.
//Core idea: If user is moving along an axis, a point behind them will have either a higher or lower coordinate value. 
//I have broken this code into blocks for now, to work it would need to be called as part of a for-loop that looped
//through an array of coordinates. The for-loop functon can be called using a setInterval.

function proximityAlert() {
    if ((direction === "north") && ((newY < coordinateArray[i].yCoordinate) && (newY  > (coordinateArray[i].yCoordinate - 0.01))) && (newX === coordinateArray[i].xCoordinate)) {
        return proximitySound; 
    } 

    if ((direction === "south") && ((Ycurrent > Yahead) && (Ycurrent  < (Yahead + 0.01))) && (Xcurrent === Xahead)) {
        return proximitySound; 
    } 

    if ((direction === "west") && ((Xcurrent > Xahead) && (Xcurrent  < (Xahead + 0.01))) && (Ycurrent === Yahead)) {
        return proximitySound; 
    }
    
    if ((direction === "east") && ((Xcurrent < Xahead) && (Xcurrent > (Xahead - 0.01))) && (Ycurrent === Yahead)) {
        return proximitySound; 
    }

    if ((direction === "northeast") && ((Ycurrent < Yahead) && (Ycurrent  > (Yahead - 0.01))) && ((Xcurrent < Xahead) && (Xcurrent > (Xahead - 0.01)))) {
        return proximitySound; 
    }  

    if ((direction === "southeast") && ((Ycurrent > Yahead) && (Ycurrent  < (Yahead + 0.01))) && ((Xcurrent < Xahead) && (Xcurrent > (Xahead - 0.01)))) {
        return proximitySound; 
    }  

    if ((direction === "southwest") && ((Ycurrent > Yahead) && (Ycurrent  < (Yahead + 0.01))) && ((Xcurrent > Xahead) && (Xcurrent  < (Xahead + 0.01)))) {
        return proximitySound; 
    }

    if ((direction === "northwest") && ((Ycurrent < Yahead) && (Ycurrent  > (Yahead - 0.01))) && ((Xcurrent > Xahead) && (Xcurrent  < (Xahead + 0.01)))) {
        return proximitySound; 
    }
}

