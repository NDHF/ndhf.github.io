$(document).ready(function () {

var lukeHP = 100;
var obiWanHP = 120;
var darthSidiousHP = 150;
var darthMaulHP = 180;

var lukeBaseAttackPower = 6;
var obiWanBaseAttackPower = 8;
var darthSidiousBaseAttackPower = 8;
var darthMaulBaseAttackPower = 9;

var attackMultiplier = 0;

var wins = 0;
var losses = 0;

$("#lukeHP").html(lukeHP);
$("#obiWanHP").html(obiWanHP);
$("#sidiousHP").html(darthSidiousHP);
$("#maulHP").html(darthMaulHP);

function getStats(wins, losses){
    document.getElementById("stats").innerHTML = "Wins: " + wins + "<br>" +
    "Losses: " + losses + "<br>";
};

    $("#playAgain").on("click", function() {

    $("#characterSelect").append($(".enemy"));
    $("#characterSelect").append($(".yourCharacter"));
    $("#characterSelect").children().removeClass("enemy");
    $("#characterSelect").children().removeClass("yourCharacter");
    $("#characterSelect").children().addClass("roster");
    $("#characterSelect").append($(".defender"));
    $("#playAgain").hide();
    $("#combatButton").hide();
    $("#characterRoster").show();
    $("#playerAttack").html("");
    chooseCharacter();
    });

    $("#playAgain").hide();
    $("#combatButton").hide();

    getStats(wins, losses);

    function playerAttackMessage(playerCharacter, attack) {
        $("#playerAttack").html(playerCharacter + " attacks for " + attack + " points.");
    };

    function enemyAttackMessage(opponent, attack) {
        $("#enemyAttack").html(opponent + " attacks for " + attack + " points.");
    };

function enemyClick() {
    $(".enemy").on("click", function() {
        // alert("A div with the class 'enemy' was clicked.");
        $("#defenderDiv").append($(this));
        $("#defenderDiv").children().addClass("defender");
        $("#playerAttack").html("");
        $("#combatButton").show();
        $(".enemy").off("click");

    });
};

chooseCharacter();

function chooseCharacter() {
$(".roster").on("click", function() {

    // alert($(this).attr("id"));

    $("#enemySelect").append($(this).siblings());
    $("#yourCharacterDiv").append($(this));
    $("#characterRoster").hide();

    $(".roster").off("click");

    $("#yourCharacterDiv").children().addClass("yourCharacter");
    $("#yourCharacterDiv").children().removeClass("roster");
    $("#enemySelect").children().addClass("enemy");
    $("#enemySelect").children().removeClass("roster");
    enemyClick();
    });
};

$("#combatButton").on("click", function() {
        // alert("Player is: " + $("div.yourCharacter").attr("id"));
        // alert("Enemy is: " + $("div.defender").attr("id"));
    
        var lukeAttack = lukeBaseAttackPower * attackMultiplier;
        var obiWanAttack = obiWanBaseAttackPower * attackMultiplier;
        var darthSidiousAttack = darthSidiousBaseAttackPower * attackMultiplier;
        var darthMaulAttack = darthMaulBaseAttackPower * attackMultiplier;

        var lukeCounterattack = 5;
        var obiWanCounterattack = 11;
        var darthSidiousCounterattack = 20;
        var darthMaulCounterattack = 25;

        if ($("#defenderDiv").is(":empty")) {
         
            $("#playerAttack").html("You must choose an opponent before attacking.");
            
        } else if ($("div.yourCharacter").attr("id") === "luke") {
            attackMultiplier++;

    
            playerAttackMessage("Luke", lukeAttack)
    
            if ($("div.defender").attr("id") === "obiWan")  {
                obiWanHP -= lukeAttack;
                $("#obiWanHP").html(obiWanHP);
                lukeHP -= obiWanCounterattack;
                $("#lukeHP").html(lukeHP);
                enemyAttackMessage("Obi-Wan", obiWanCounterattack);
            } else if ($("div.defender").attr("id") === "sidious")  {
                darthSidiousHP -= lukeAttack;
                $("#sidiousHP").html(darthSidiousHP);
                lukeHP -= darthSidiousCounterattack;
                $("#lukeHP").html(lukeHP);
                enemyAttackMessage("Darth Sidious", darthSidiousCounterattack);
            } else if ($("div.defender").attr("id") === "maul")  {
                darthMaulHP -= lukeAttack;
                $("#maulHP").html(darthMaulHP);
                lukeHP -= darthMaulCounterattack;
                $("#lukeHP").html(lukeHP);
                enemyAttackMessage("Darth Maul", darthMaulCounterattack);
            } 
        } else if ($("div.yourCharacter").attr("id") === "obiWan") {
            attackMultiplier++;

    
            playerAttackMessage("Obi-Wan", obiWanAttack)
    
            if ($("div.defender").attr("id") === "luke")  {
                lukeHP -= obiWanAttack;
                $("#lukeHP").html(lukeHP);
                obiWanHP -= lukeCounterattack;
                $("#obiWanHP").html(obiWanHP);
                enemyAttackMessage("Luke", lukeCounterattack);
            } else if ($("div.defender").attr("id") === "sidious")  {
                darthSidiousHP -= obiWanAttack;
                $("#sidiousHP").html(darthSidiousHP);
                obiWanHP -= darthSidiousCounterattack;
                $("#obiWanHP").html(obiWanHP);
                enemyAttackMessage("Darth Sidious", darthSidiousCounterattack);
            } else if ($("div.defender").attr("id") === "maul")  {
                darthMaulHP -= obiWanAttack;
                $("#maulHP").html(darthMaulHP);
                obiWanHP -= darthMaulCounterattack;
                $("#obiWanHP").html(obiWanHP);
                enemyAttackMessage("Darth Maul", darthMaulCounterattack);
            } 
        } else if ($("div.yourCharacter").attr("id") === "sidious") {
            attackMultiplier++;

    
            playerAttackMessage("Darth Sidious", darthSidiousAttack)
    
            if ($("div.defender").attr("id") === "obiWan")  {
                obiWanHP -= darthSidiousAttack;
                $("#obiWanHP").html(obiWanHP);
                darthSidiousHP -= obiWanCounterattack;
                $("#sidiousHP").html(darthSidiousHP);
                enemyAttackMessage("Obi-Wan", obiWanCounterattack);
            } else if ($("div.defender").attr("id") === "luke")  {
                lukeHP -= darthSidiousAttack;
                $("#lukeHP").html(lukeHP);
                darthSidiousHP -= lukeCounterattack;
                $("#sidiousHP").html(darthSidiousHP);
                enemyAttackMessage("Luke", lukeCounterattack);
            } else if ($("div.defender").attr("id") === "maul")  {
                darthMaulHP -= darthSidiousAttack;
                $("#maulHP").html(darthMaulHP);
                darthSidiousHP -= darthMaulCounterattack;
                $("#sidiousHP").html(darthSidiousHP);
                enemyAttackMessage("Darth Maul", darthMaulCounterattack);
            } 
        } else if ($("div.yourCharacter").attr("id") === "maul") {
            attackMultiplier++;

    
            playerAttackMessage("Darth Maul", darthMaulAttack)
    
            if ($("div.defender").attr("id") === "obiWan")  {
                obiWanHP -= darthMaulAttack;
                $("#obiWanHP").html(obiWanHP);
                darthMaulHP -= obiWanCounterattack;
                $("#lukeHP").html(darthMaulHP);
                enemyAttackMessage("Obi-Wan", obiWanCounterattack);
            } else if ($("div.defender").attr("id") === "sidious")  {
                darthSidiousHP -= darthMaulAttack;
                $("#sidiousHP").html(darthSidiousHP);
                darthMaulHP -= darthSidiousCounterattack;
                $("#lukeHP").html(darthMaulHP);
                enemyAttackMessage("Darth Sidious", darthSidiousCounterattack);
            } else if ($("div.defender").attr("id") === "luke")  {
                lukeHP -= darthMaulAttack;
                $("#lukeHP").html(lukeHP);
                darthMaulHP -= lukeCounterattack;
                $("#maulHP").html(darthMaulHP);
                enemyAttackMessage("Luke", lukeCounterattack);
            } 
        }
        //The following will run if enemy's HP hits zero or lower
        if ($(".defender p").html() <= 0) {
            //Reset all stats
            lukeHP = 100;
            $("#lukeHP").html(lukeHP);
            obiWanHP = 101;
            $("#obiWanHP").html(obiWanHP);
            darthSidiousHP = 102;
            $("#sidiousHP").html(darthSidiousHP);
            darthMaulHP = 103;
            $("#maulHP").html(darthMaulHP);
            attackMultiplier = 0;

            //Remove enemy from its div
            // $("#defenderDiv").children().remove();
            $("#characterSelect").append($(".defender"));
            $("#characterSelect").children().removeClass("defender");
            $("#characterSelect").children().removeClass("enemy");
            $("#characterSelect").children().addClass("roster");
            //Let player know they won the round
            $("#playerAttack").html("Player Wins! Choose your next opponent...");
            //Clear enemyAttack element
            $("#enemyAttack").html("");
            enemyClick();

            if ($("#enemySelect").is(":empty")) {
                //Let player know they won the game
                $("#playerAttack").html("You won the game!");
                //Clear enemyAttack element
                $("#enemyAttack").html("");   
                wins++;
                attackMultiplier = 0;
                console.log(wins); 
                getStats(wins, losses);
                $("#combatButton").hide();
                $("#playAgain").show();
            }

          // The following will run if player's HP hits zero or lower
        } else if ($("div.yourCharacter p").html() <= 0) {
            //Reset all stats
            lukeHP = 100;
            $("#lukeHP").html(lukeHP);
            obiWanHP = 101;
            $("#obiWanHP").html(obiWanHP);
            darthSidiousHP = 102;
            $("#sidiousHP").html(darthSidiousHP);
            darthMaulHP = 103;
            $("#maulHP").html(darthMaulHP);
            attackMultiplier = 0;
            //Remove your character from its div
            $("#characterSelect").append($(".yourCharacter"));
            //Let player know they lost
            $("#playerAttack").html("GAME OVER");
            //Clear enemyAttack element
            $("#enemyAttack").html("");
            losses++;
            console.log(losses);
            getStats(wins, losses);
            $("#combatButton").hide();
            $("#playAgain").show();
            } 
    
});
    
});

// $("div.defender").remove();
            // $("div.defenderDiv").children().remove();
    