localStorage.setItem("username", "Admin");
localStorage.setItem("password", "Admin1212");

function looksLikeMail(str) {
    var lastAtPos = str.lastIndexOf("@");
    var lastDotPos = str.lastIndexOf(".");
    return (lastAtPos < lastDotPos && lastAtPos > 0 && str.indexOf('@@') == -1 && lastDotPos > 2 && (str.length - lastDotPos) > 2);
}

function disableSubmit() {
    document.getElementById("sendButton").disabled = true;
    $("#messageForUser").html("Message was sent successfully!").css({ "color": "green" });
    setTimeout(function () {
        document.getElementById("sendButton").disabled = false;
        $("#messageForUser").html("");
        $("#firstName").val("");
        $("#lastName").val("");
        $("#email").val("");
        $("#uTextarea").val("");
    }, 4500);
}

function sendContactForm() {
    var fname = document.getElementById("firstName").value;
    var lname = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var ref = document.getElementById("refType").value;
    var text = document.getElementById("uTextarea").value;
    var date = new Date();
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0');
    var yyyy = date.getFullYear();
    var hh = date.getHours();
    var mm = date.getMinutes();
    var ss = date.getSeconds();
    date = mm + '/' + dd + '/' + yyyy + " , " + hh + ":" + mm + ":" + ss;
    var mailCount = localStorage.getItem("mailCount");

    if (fname == "" || lname == "" || email == "" || text == "") {
        document.getElementById("messageForUser").innerHTML = "one of the fields is empty.";
        $("#messageForUser").html("one of the fields is empty.").css({ "color": "red" });
        setTimeout(function () {
            $("#messageForUser").html("");
        }, 3000);
        return;
    } else if (fname.length <= 2 || lname.length <= 2 || email.length < 2 || text.length < 10) {
        if (fname.length <= 2) {
            $("#messageForUser").append("<br>first name has to be more than 2 chars.");
            $("#firstName").css({ "background": "red" });
            setTimeout(function () {
                $("#firstName").css({ "background": "none" });
                $("#messageForUser").html("");
            }, 4500);
        }
        if (lname.length <= 2) {
            $("#messageForUser").append("<br>last name has to be more than 2 chars.");
            $("#lastName").css({ "background": "red" });
            setTimeout(function () {
                $("#lastName").css({ "background": "none" });
                $("#messageForUser").html("");
            }, 4500);
        }
        if (looksLikeMail(email) == false) {
            $("#messageForUser").append("<br>email is not valid(missing '@' or '.').");
            $("#email").css({ "background": "red" });
            setTimeout(function () {
                $("#email").css({ "background": "none" });
                $("#messageForUser").html("");
            }, 4500);
        }
        if (text.length < 10) {
            $("#uTextarea").css({ "background": "red" });
            $("#messageForUser").append("<br>text has less then 10 chars...");
            setTimeout(function () {
                $("#uTextarea").css({ "background": "none" });
                $("#messageForUser").html("");
            }, 4500);
        }
        return;
    }

    if (mailCount == null) {
        localStorage.setItem("mailCount", "0");
        console.log(mailCount);
    } else {
        var x = parseInt(localStorage.getItem("mailCount"));
        localStorage.setItem("mailCount", (x + 1));
    }
    localStorage.setItem("date-" + mailCount, date);
    localStorage.setItem("firstname-" + mailCount, fname);
    localStorage.setItem("lastname-" + mailCount, lname);
    localStorage.setItem("email-" + mailCount, email);
    localStorage.setItem("ref-" + mailCount, ref);
    localStorage.setItem("text-" + mailCount, text);
    disableSubmit();
}

function loginAdmin() {
    var username = document.getElementById("uName").value;
    var password = document.getElementById("uPass").value;

    if (localStorage.getItem("username") == username && localStorage.getItem("password") == password) {
        localStorage.setItem("logged", "true");
        console.log("success");
        location.href = "admin.html";
    } else {
        localStorage.setItem("logged", "false");
        $("#uName").css({ "border-bottom": "3px solid red" })
        $("#uPass").css({ "border-bottom": "3px solid red" })
    }
}

function logout() {
    localStorage.setItem("logged", "false");
    location.href = "index.html";
}

