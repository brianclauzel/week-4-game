

//ready the page to load things
$(document).ready(function() {

//global variable
    var randomNumber = 19 + Math.floor(Math.random() * 120);
    var wins = 0;
    var losses = 0;
    var blueGem = "";
    var purpleGem = "";
    var yellowGem = "";
    var greenGem = "";

//generate random number to match with 
function randomlyGeneratedNumber() {
    $(".random-number").html($(randomNumber));
}

//generate random numbers for each gem

//make gems add together to change score as you click them

//when total score equals random score add to wins, if it goes over, add to losses

//restart game when random number matches total score



console.log(randomNumber);

});



