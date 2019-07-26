
var factoryName = localStorage.getItem("factoryName");
console.log(bambot , localStorage.getItem("bambot"));
var bambot = parseInt(localStorage.getItem("bambot"));
console.log(bambot , localStorage.getItem("bambot"));
if(parseInt(localStorage.getItem("bambot")) == 'undefined' || parseInt(localStorage.getItem("bambot")) == 'NaN'){
    localStorage.setItem("bambot" , "0");
    bambot = parseInt(localStorage.getItem("bambot"));
}else{
    alert("Your old bambot were save (" + bambot + ")");
}
var bambotPerClick = 1;
var bambotPerSecond = 0;
var clicks = 0;
var mission = 0;
var bambaLevel = ["Parpar", "Osem", "Red", "Nogat", "Halva", "Kapuchino"];
var bambaImg = ["images/levels/BambaParpar.jpg", "images/levels/Bamba.png", "images/levels/BambaRed.jpg", "images/levels/BambaNogat.png", "images/levels/BambaHalva.png", "images/levels/BambaKapuchino.png"];
var bambaColor = ["rgb(255, 119, 41)", "blue", "red", "brown", "white", "#be9b7b"];
var t = setInterval(runFunction, 1000);


function runFunction() {
    document.getElementById("factoryName").innerHTML = localStorage.getItem("factoryName");
    document.getElementById("bambotTotal").innerHTML = addCommas(bambot);
    document.getElementById("perSec").innerHTML = bambotPerSecond;
    document.getElementById("perClick").innerHTML = bambotPerClick;
    document.getElementById("clicksInTotal").innerHTML = clicks;
    document.getElementById("bambaLevel").innerHTML = bambaLevel[mission];
    document.getElementById("bamba").src = bambaImg[mission];
    document.getElementById("level").style.backgroundColor = bambaColor[mission];
    document.title = "Bamba clicker - " + bambot + " bambot!";
    bambot += bambotPerSecond;
    localStorage.setItem("bambot" , bambot);
    console.log(localStorage.getItem("bambot"));
}

function startMission() {
    switch (mission) {
        case 0:
            $("#w2 img").show(1000);
            document.getElementById("missionForUser").innerHTML = "Your first task as a butterfly bamba begins is to achieve 100 bambas," +
                " develop the bamba production capacity per second to 2 bambas production capacity per click to 10, and 20 clicks.</br>" +
                "After you get it click on the development button and develop into Osem Bamba.</br>" +
                "<button class='btn btn-outline-warning btn-lg' onclick='checkMission()'>DEVELOPMENT!</button>"
            /*document.getElementById("missionForUser").innerHTML = "<p><stronger>" + "1.achive 100 bambas.</br>2.develop the bamba production capacity per second to 2</br>" +
            "3.per click to 10.</br>4.clicks to 20." + "</stronger></p></br>" +
            "<button class='btn btn-outline-warning btn-lg' onclick='checkMission()'>DEVELOPMENT!</button>";*/
            break;
        case 1:
            document.getElementById("missionForUser").innerHTML = "Bamba Osem has developed!</br>" +
                "In order to develop more you will need to get 1,500 bambot," +
                " develop the bamba production capacity per second to 20 bambas production capacity per click to 80, and 100 clicks.</br>" +
                "After you get it click on the development button and develop into switty Red Bamba.</br>" +
                "<button class='btn btn-outline-warning btn-lg' onclick='checkMission()'>DEVELOPMENT!</button>"
            break;
        case 2:
            document.getElementById("missionForUser").innerHTML = "Red switty Bamba has developed!</br>" +
                "In order to develop more you will need to get 10,000 bambot," +
                " develop the bamba production capacity per second to 120 bambas production capacity per click to 300, and 250 clicks.</br>" +
                "After you get it click on the development button and develop into Nogat Bamba.</br>" +
                "<button class='btn btn-outline-warning btn-lg' onclick='checkMission()'>DEVELOPMENT!</button>"
            break;
        case 3:
            document.getElementById("missionForUser").innerHTML = "Nogat Bamba has developed!</br>" +
                "In order to develop more you will need to get 100,000 bambot," +
                " develop the bamba production capacity per second to 500 bambas production capacity per click to 1000, and 750 clicks.</br>" +
                "After you get it click on the development button and develop into Halva Bamba.</br>" +
                "<button class='btn btn-outline-warning btn-lg' onclick='checkMission()'>DEVELOPMENT!</button>"
            break;
        case 4:
            document.getElementById("missionForUser").innerHTML = "Halva Bamba has developed!</br>" +
                "In order to develop more you will need to get 1,000,000 bambot," +
                " develop the bamba production capacity per second to 1,500 bambas production capacity per click to 5,000 , and 1,000 clicks.</br>" +
                "After you get it click on the development button and develop into Kapuchino Bamba.</br>" +
                "<button class='btn btn-outline-warning btn-lg' onclick='checkMission()'>DEVELOPMENT!</button>"
            break;
        case 5:
            document.getElementById("missionForUser").innerHTML = "You are the king of the Bambot!</br>" +
                "You won the game madafaka!!!";
            break;
    }

}

function checkMissionStats(total, perSec, perClick, click) {
    if (bambot >= total && bambotPerSecond >= perSec && bambotPerClick >= perClick && clicks > click) {
        mission++;
        document.getElementById("bamba").src = bambaImg[mission];
        document.getElementById("level").style.backgroundColor = bambaColor[mission];
        bambot -= total;
        bambotPerSecond *= (mission + 1);
        bambotPerClick *= (mission + 1);
        startMission();
    } else {
        messageNotEnough();
    }
}

function checkMission() {
    switch (mission) {
        case 0:
            checkMissionStats(100, 2, 10, 20);
            break;
        case 1:
            checkMissionStats(1500, 20, 80, 100);
            break;
        case 2:
            checkMissionStats(10000, 120, 300, 250);
            break;
        case 3:
            checkMissionStats(100000, 500, 1000, 350);
            break;
        case 4:
            checkMissionStats(1000000, 1500, 5000, 450);
            break;
    }
}


function changeFactoryName() {
    var name = prompt("Please enter your factory name", "Bamba Datz");

    if (name.length < 20) {
        localStorage.setItem("factoryName" , name);
        document.getElementById("factoryName").innerHTML = localStorage.getItem("factoryName");
    } else {
        alert("factory's name is too long(up to 20 characters.)");
    }
    console.log(localStorage.getItem("factoryName"));
}

function clickMe(bamba) {
    if (clicks % 2 == 0) {
        bamba.style.transform = "scale(1.1 , 1.1)";
        bamba.style.transition = "300ms ease-in transform";
    } else {
        bamba.style.transform = "scale(1 , 1)";
        bamba.style.transition = "300ms ease-in transform";
    }
    bambot += bambotPerClick;
    clicks++;
    document.getElementById("bambotTotal").innerHTML = addCommas(bambot);
}

function messageNotEnough() {
    var message = document.getElementById("messageForUser");
    message.innerHTML = "Not enough Bambot!";
    message.style.opacity = "1";
    message.style.transition = "opacity 500ms ease-in";
    setTimeout(function () {
        message.innerHTML = "";
        message.style.opacity = "0";
    }, 3000);
}

function plus(itemFromStore, requiredBamba, addPerClick, addPerSec) {
    if (bambot >= requiredBamba) {
        bambot -= requiredBamba;
        document.getElementById(itemFromStore).value++;
        bambotPerClick += (addPerClick * (mission + 1));
        console.log(bambotPerClick);
        bambotPerSecond += (addPerSec * (mission + 1));
    } else {
        messageNotEnough();
    }
}

function addCommas(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}