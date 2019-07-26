var moves = 0;
var score = 0;
var countClicks = 0;
var cardsFront = [];
var numCards = 0;
function startGame(numOfCards) {
    document.getElementById("uMessage").innerHTML = "";
    document.getElementById("buttons").innerHTML = "";
    numCards = numOfCards;
    createCards();
    moves = 0;
}

function createCards() {
    document.getElementById("gameBoard").innerHTML = "";
    var row = numCards / 2;
    for (var i = 1; i <= numCards; i++) {
        var newBox = document.createElement("div");
        newBox.className += "card-game";
        newBox.id = "card-" + i;
        newBox.onclick = function () {
            play(this);
        };
        document.getElementById("gameBoard").appendChild(newBox);
        if (row == i) {
            document.getElementById("gameBoard").innerHTML += "</br>";
        }
    }
}

function play(elm) {

}