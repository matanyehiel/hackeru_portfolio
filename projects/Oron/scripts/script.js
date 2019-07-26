var numbers = 10;
var x = getNumber(numbers);
var y = getNumber(numbers);
var ops = ["+", "-", "*", "/"];
var op = getOperator();
var checked = false;
var idEx = 0;
var score = 0;
var answer;
var realAnswer = 0;

window.onload = function () {
    document.getElementById("num1").innerHTML = x;
    document.getElementById("num2").innerHTML = y;
    document.getElementById("scoreNow").innerHTML = score;
    if (op == "+") {
        document.getElementById("op").innerHTML = "+";
    } else if (op == "-") {
        document.getElementById("op").innerHTML = "-";
    } else if (op == "*") {
        document.getElementById("op").innerHTML = "*";
    } else {
        document.getElementById("op").innerHTML = "/";
    }
}

var t = setInterval(function(){
    document.getElementById("scoreNow").innerHTML = score;
} , 1000)

function newNumbers(num){
    numbers = num;
    checked = true;
}

function getNumber() {
    return Math.floor(Math.random() * numbers) + 1;
}

function getOperator() {
    return ops[Math.floor(Math.random() * 4)];
}

function checkAnswer() {
    answer = document.getElementById("answer").value;
    if (answer == "") {
        document.getElementById("uMessage").innerHTML = "שדה ריק";
        return;
    } else if (op == "+") {
        if (answer == (x + y)) {
            checked = true;
            document.getElementById("uMessage").innerHTML = "תשובה נכונה! המתן לשאלה הבאה.";
            rightAnswer();
        } else {
            document.getElementById("uMessage").innerHTML = "תשובה שגויה.";
            wrongAnswer();
        }
    } else if (op == "-") {
        if (answer == (x - y)) {
            checked = true;
            document.getElementById("uMessage").innerHTML = "תשובה נכונה! המתן לשאלה הבאה.";
            rightAnswer();
        } else {
            document.getElementById("uMessage").innerHTML = "תשובה שגויה.";
            wrongAnswer();
        }
    } else if (op == "*") {
        if (answer == (x * y)) {
            checked = true;
            document.getElementById("uMessage").innerHTML = "תשובה נכונה! המתן לשאלה הבאה.";
            rightAnswer();
        } else {
            document.getElementById("uMessage").innerHTML = "תשובה שגויה.";
            wrongAnswer();
        }
    } else if (op == "/") {
        if (answer == (x / y)) {
            checked = true;
            document.getElementById("uMessage").innerHTML = "תשובה נכונה! המתן לשאלה הבאה.";
            rightAnswer();
        } else {
            document.getElementById("uMessage").innerHTML = "תשובה שגויה.";
            wrongAnswer();
        }
    }
    realAnswer = calculate(x, y, op);
    var exercise = x + " " + op + " " + y;
    createRow(idEx, exercise, realAnswer, document.getElementById("answer").value, score);
    document.getElementById("answer").value = "";
}


function newQuestion() {
    if (checked) {
        document.getElementById("uMessage").innerHTML = "";
        x = getNumber(numbers);
        y = getNumber(numbers);
        op = getOperator();
        document.getElementById("num1").innerHTML = x;
        document.getElementById("num2").innerHTML = y;
        document.getElementById("op").innerHTML = op;
        checked = false;
        document.getElementById("buttonCheck").disabled = false;
    } else {
        document.getElementById("uMessage").innerHTML = "קודם ענה נכונה על השאלה הנוכחית";
    }
}

function calculate(num1, num2, op) {
    if (op == "+") {
        return (num1 + num2);
    } else if (op == "-") {
        return (num1 - num2);
    } else if (op == "*") {
        return (num1 * num2);
    } else {
        return (num1 / num2);
    }
}

function rightAnswer() {
    score += 10;
    document.getElementById("buttonCheck").disabled = "true";
    setTimeout(newQuestion , 2500);
}

function wrongAnswer() {
    score -= 3;
}

function createRow(id, ex, answer, youAnswer, score) {
    var table = document.getElementById("scoreTable").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.rows.length);
    var newCel1 = newRow.insertCell(0);
    var newCel2 = newRow.insertCell(1);
    var newCel3 = newRow.insertCell(2);
    var newCel4 = newRow.insertCell(3);
    var newCel5 = newRow.insertCell(4);
    var newText = document.createTextNode("new row");
    newCel1.innerHTML = id;
    newCel2.innerHTML = ex;
    newCel3.innerHTML = answer;
    newCel4.innerHTML = youAnswer;
    newCel5.innerHTML = score;
    if (answer == youAnswer) {
        newRow.style.backgroundColor = "rgba(0, 255, 34, 0.466)";
    }
    idEx++;
}

function pushButton(buttonValue)
{
     if (buttonValue == "AC")
     {
          document.getElementById('displayNum').innerHTML = '';
     }
     else
     {
          document.getElementById('displayNum').innerHTML += buttonValue;
     }
}
function calculateC(equation)
{
     var answer = eval(equation);
     document.getElementById('displayNum').innerHTML = answer;
}