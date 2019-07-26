var countClicks = 0;
var xPlayerScore = 0;
var oPlayerScore = 0;

function resetScores() {
    xPlayerScore = 0;
    oPlayerScore = 0;
    document.getElementById("xPlayerScore").innerHTML = xPlayerScore;
    document.getElementById("oPlayerScore").innerHTML = oPlayerScore;
}

function startGame() {
    document.getElementById("xPlayerScore").innerHTML = xPlayerScore;
    document.getElementById("oPlayerScore").innerHTML = oPlayerScore;
    createBoxes();
    countClicks = 0;
}

function createBoxes() {
    document.getElementById("gameBoard").innerHTML = "";
    for (var i = 1; i <= 9; i++) {
        var newBox = document.createElement("div");
        newBox.className += "box";
        newBox.style.cursor = "pointer";
        newBox.id = "box-" + i;
        newBox.innerHTML = "?";
        newBox.onclick = function () {
            play(this);
        };
        document.getElementById("gameBoard").appendChild(newBox);
    }
}

function play(elm) {
    console.log(elm.id);

    if (elm.innerHTML != "?") {
        return;
    }

    if (countClicks % 2 == 0) {
        elm.innerHTML = "X";
        elm.style.backgroundColor = "black";
        elm.style.color = "white";
    } else {
        elm.innerHTML = "O";
        elm.style.backgroundColor = "white";
        elm.style.color = "black";
    }
    countClicks++;


    if (elm.id == "box-1") {
        checkSet("box-1", "box-2", "box-3");
        checkSet("box-1", "box-4", "box-7");
        checkSet("box-1", "box-5", "box-9");
    } else if (elm.id == "box-2") {
        checkSet("box-2", "box-5", "box-8");
        checkSet("box-2", "box-1", "box-3");
    } else if (elm.id == "box-3") {
        checkSet("box-3", "box-2", "box-1");
        checkSet("box-3", "box-5", "box-7");
        checkSet("box-3", "box-6", "box-9");
    } else if (elm.id == "box-4") {
        checkSet("box-4", "box-5", "box-6");
        checkSet("box-4", "box-1", "box-7");
    } else if (elm.id == "box-5") {
        checkSet("box-5", "box-4", "box-6");
        checkSet("box-5", "box-2", "box-8");
        checkSet("box-5", "box-1", "box-9");
    } else if (elm.id == "box-6") {
        checkSet("box-6", "box-5", "box-4");
        checkSet("box-6", "box-3", "box-9");
    } else if (elm.id == "box-7") {
        checkSet("box-7", "box-8", "box-9");
        checkSet("box-7", "box-4", "box-1");
        checkSet("box-7", "box-5", "box-3");
    } else if (elm.id == "box-8") {
        checkSet("box-8", "box-9", "box-7");
        checkSet("box-8", "box-5", "box-2");
    } else if (elm.id == "box-9") {
        checkSet("box-9", "box-8", "box-7");
        checkSet("box-9", "box-5", "box-1");
        checkSet("box-9", "box-6", "box-3");
    }

}

function checkSet(id1, id2, id3) {
    var txt1 = document.getElementById(id1).innerHTML;
    var txt2 = document.getElementById(id2).innerHTML;
    var txt3 = document.getElementById(id3).innerHTML;

    if (txt1 == txt2 && txt1 == txt3) {
        document.getElementById(id1).style.backgroundColor = "green";
        document.getElementById(id2).style.backgroundColor = "green";
        document.getElementById(id3).style.backgroundColor = "green";
        winner(id1);
    }else if(countClicks == 9){
        setTimeout(
            function () {
                var drawPost = document.getElementById("messageForUser");
                drawPost.innerHTML = "DRAW";
                drawPost.style.opacity = "1";
                drawPost.style.transition = "opacity 1000ms"

                setTimeout(
                    function () {
                        document.getElementById("messageForUser").style.opacity = "0";
                        document.getElementById("messageForUser").style.transition = "opacity 500ms";
                        startGame();
                    }, 2000);
            }, 1000);
    }

}

function winner(playerSide) {
    var text = document.getElementById(playerSide).innerHTML;
    console.log(text);
    for (var i = 1; i <= 9; i++) {
        document.getElementById("box-" + i).onclick = false;
    }
    if (text == "O") {
        oPlayerScore++;
    } else if (text == "X") {
        xPlayerScore++;
    }
    console.log(xPlayerScore, oPlayerScore);
    setTimeout(
        function () {
            var winningPost = document.getElementById("messageForUser");
            winningPost.innerHTML = text + "-Player WON! +1";
            winningPost.style.opacity = "1";
            winningPost.style.transition = "opacity 1000ms"

            // document.getElementById("gameBoard").appendChild(winningPost);
            setTimeout(
                function () {
                    document.getElementById("messageForUser").style.opacity = "0";
                    document.getElementById("messageForUser").style.transition = "opacity 500ms";
                    startGame();
                }, 2000);
        }, 1000);
}