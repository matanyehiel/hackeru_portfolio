function addToList() {
    var product = document.getElementById("uProduct").value;

    if (product != "") {
        document.getElementById("uProduct").style.borderBottom = 0;
        var newProduct = document.createElement("li");
        newProduct.innerHTML = product;
        document.getElementById("shoppingList").appendChild(newProduct);
    } else {
        document.getElementById("uProduct").style.borderBottom = "3px solid red";
    }
}

function deleteList() {
    document.getElementById("shoppingList").innerHTML = "";
}