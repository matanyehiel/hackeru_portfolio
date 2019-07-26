var users = [];
var emails = [];
var passes = [];
var t = setInterval(runFunction , 5000);

function runFunction(){
    document.getElementById("uMessage").innerHTML = "";
    document.getElementById("uMessage").style.color = "black";
    document.getElementById("loginMessage").style.color = "black";
    document.getElementById("loginMessage").innerHTML = "";
}

function disableSubmit() {
    document.getElementById("signin").disabled = true;
}

function activateButton(element) {

    if (element.checked) {
        document.getElementById("signin").disabled = false;
    }
    else {
        document.getElementById("signin").disabled = true;
    }

}

function register() {
    var userName = document.getElementById("uName").value;
    var pass = document.getElementById("uPass").value;
    var passConfirm = document.getElementById("uConfirmPass").value;
    var email = document.getElementById("uEmail").value;
    if(userName == "" || pass == "" || passConfirm == "" || email == ""){
        document.getElementById("uMessage").innerHTML = "empty input."
        document.getElementById("uMessage").style.color = "gray";
    }else if (searchUser(userName) && samePass(pass, passConfirm) && searchEmail(email) && looksLikeMail(email)) {
        users.push(userName);
        emails.push(email);
        passes.push(pass);
        document.getElementById("uMessage").innerHTML = "The user: "
            + userName + " has been created with the password: " + pass +
            "</br> email: " + email;
        document.getElementById("uMessage").style.color = "green";
    } else if (searchUser(userName) == false) {
        document.getElementById("uMessage").innerHTML = "user name is already taken.";
        document.getElementById("uMessage").style.color = "red";
    } else if (samePass(pass, passConfirm) == false) {
        document.getElementById("uMessage").innerHTML = "Password no match";
        document.getElementById("uMessage").style.color = "red";
    } else if (searchEmail(email) == false) {
        document.getElementById("uMessage").innerHTML = "email already taken or not valid."
        document.getElementById("uMessage").style.color = "red";
    }else if(looksLikeMail(email) == false){
        document.getElementById("uMessage").innerHTML = "email not valid."
        document.getElementById("uMessage").style.color = "red";
    }
}

function searchUser(newUser) {
    for (var i = 0; i < users.length; i++) {
        if (users[i] == newUser) {
            return false;
        }else if(newUser == "")
            return false;
    }
    return true;
}

function samePass(pass1, pass2) {
    if(pass1 == "" || pass2 == "")
        return false;
    else if (pass1 == pass2) {
        return true;
    }
    return false;
}

function searchEmail(newEmail) {
    if(newEmail == "")
        return false;
    for (var i = 0; i < emails.length; i++) {
        if (emails[i] == newEmail) {
            return false;
        }
    }
    return true;
}

function looksLikeMail(str) {
    var lastAtPos = str.lastIndexOf('@');
    var lastDotPos = str.lastIndexOf('.');
    return (lastAtPos < lastDotPos && lastAtPos > 0 && str.indexOf('@@') == -1 && lastDotPos > 2 && (str.length - lastDotPos) > 2);
}

function login(){
    var username = document.getElementById("uNameLogin").value;
    var password = document.getElementById("uPassLogin").value;

    if(username == "" || password == ""){
        document.getElementById("loginMessage").innerHTML = "empty inputs."
    }else{
        if(searchUser(username) == false){
            var j = users.indexOf(username);
            if(password == passes[j]){
                document.getElementById("loginMessage").innerHTML = "Hello " +
                users[j] + "your email is " + emails[j] + " and pass " + passes[j] + ". </br>" + 
                "you have logged in successfuly!";
            }else{
                document.getElementById("loginMessage").innerHTML = "not valid pass.";
            }
        }else{
            document.getElementById("loginMessage").innerHTML = "user not found";
        }
    }
}