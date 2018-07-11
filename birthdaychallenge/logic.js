  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBNQ38d-cTHK_4JYoKXH09NdjWwgD-wJCo",
    authDomain: "njb-birthday-project.firebaseapp.com",
    databaseURL: "https://njb-birthday-project.firebaseio.com",
    projectId: "njb-birthday-project",
    storageBucket: "",
    messagingSenderId: "944708861404"
  };
  firebase.initializeApp(config);

  // Initial Values
var name = "";
var birthday = "";

var counter = 0;

$("#submitButton").on("click", function (event) {

    counter++;

    event.preventDefault();

    name = $("#nameInput").val().trim();
    console.log(name);
    birthday = $("#birthdayInput").val().trim();
    console.log(birthday);

    dataRef.ref().push({

        name: name,
        birthday: birthday,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
});

birthdayArray = [];

matchingBirthdays = [];

dataRef.ref().on("child_added", function (childSnapshot) {

    birthdayArray.push(childSnapshot.val().birthday);

}, function (errorObject) {

    console.log("Errors handled: " + errorObject.code);
});

function checkArray() {
    birthdayArray.sort(function(a, b){return a - b});  
}