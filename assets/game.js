

//ready the page to load things
$(document).ready(function() {

//global variable
    var randomNumber = "";
    var wins = 0;
    var losses = 0;
    var userScore = "";
    var gameOver = false;

//generate random number to match with 
function newGame() {
    gameOver = false;
    randomNumber = 19 + Math.floor(Math.random() * 120);
    userScore = 0;

        $(".gems").each(function() {
            var value = 1 + Math.floor(Math.random() * 12);
            $(this).attr('data-value',value);
        });

    $(".random-number").html(randomNumber);
    $("#total-score").html(userScore);
    $("#wins").html(wins);
    $("#losses").html(losses);
    
};

newGame();


//make gems add together to change score as you click them

$(".gems").on("click", function() {
    if (gameOver) {
        return;
    }

    if (userScore < randomNumber) {
        userScore += parseInt($(this).attr("data-value"));
        $("#total-score").html(userScore);
    };

    if (userScore === randomNumber) {
        gameOver = true;
        wins++;
        $("#wins").html(wins);
    };

    if (userScore > randomNumber) {
        gameOver = true;
        losses++;
        $("#losses").html(losses);
    };

});

//when total score equals random score add to wins, if it goes over, add to losses

//restart game when random number matches total score
newGame();

console.log(randomNumber);

});



