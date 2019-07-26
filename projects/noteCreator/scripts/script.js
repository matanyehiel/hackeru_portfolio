    var site = document.querySelector("#sec");
    site.addEventListener("click" , getClickPosition , false);

function getClickPosition(e){
    var xPosition = e.screenX;
    var yPosition = e.clientY;
    var translate3dValue = "translate3d(" + xPosition + "px," + yPosition + "px, 0)";
    console.log(xPosition);
}