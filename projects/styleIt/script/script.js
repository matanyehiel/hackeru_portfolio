
function userInput() {
    var t = setInterval(userInput , 300);
    var text = document.getElementById("inputText").value;
    var element = document.getElementById("uElement").value;
    var newText = document.createElement(element);
    var height = document.getElementById("uHeight").value;
    var width = document.getElementById("uWidth").value;
    var borderSide = document.getElementById("uBorder").value;
    var borderWidth = document.getElementById("uBorderWidth").value;
    var borderStyle = document.getElementById("uBorderStyle").value;
    var borderColor = document.getElementById("uBorderColor").value;
    var fontFamily = document.getElementById("uFontFamily").value;
    var fontSize = document.getElementById("uFontSize").value;
    var fontWeight = document.getElementById("uFontWeight").value;
    var textShadow = document.getElementById("uTextShadow").value;
    var textDecoration = document.getElementById("uTextDecoration").value;
    var color = document.getElementById("uColor").value;
    var bgColor = document.getElementById("uBackgroundColor").value;
    var textAlign = document.getElementById("uTextAlign").value;
    console.log(text, element, newText, borderSide , borderColor , borderStyle , borderWidth , height, width);
    newText.innerHTML = text;
    newText.style.height = height + "px";
    newText.style.width = width + "px";
    if(borderSide == "border"){
        newText.style.border = borderWidth + "px " + borderStyle + " " + borderColor;
    }else if(borderSide == "borderTop"){
        newText.style.borderTop = borderWidth + "px " + borderStyle + " " + borderColor;
    }else if(borderSide == "borderBottom"){
        newText.style.borderBottom = borderWidth + "px " + borderStyle + " " + borderColor;
    }else if(borderSide == "borderLeft"){
        newText.style.borderLeft = borderWidth + "px " + borderStyle + " " + borderColor;
    }else if(borderSide == "borderRight"){
        newText.style.borderRight = borderWidth + "px " + borderStyle + " " + borderColor;
    }
    newText.style.fontFamily = fontFamily;
    newText.style.fontSize = fontSize + "px";
    newText.style.fontWeight = fontWeight;
    newText.style.textShadow = textShadow;
    newText.style.textDecoration = textDecoration;
    newText.style.textAlign = textAlign;

    document.getElementById("uStyle").innerHTML = "";
    document.getElementById("uStyle").appendChild(newText);
}

function selectElement() {
    var element = document.getElementById("uElement").value;
    document.getElementById("propertiesTag").innerHTML = element;
}

function reset() {
    document.getElementById("uStyle").innerHTML = "<h1><img src='images/logo.png' alt='logo'></h1>";
    document.getElementById("uElement").value = "h1";
    document.getElementById("inputText").value = "";
    document.getElementById("propertiesTag").innerHTML = "h1";
}

function getCode() {
    var insideCode = document.getElementById("uStyle").innerHTML;
    document.getElementById("uCode").innerText = insideCode;
}

function doIt(){
    getCode();
    userInput();
}