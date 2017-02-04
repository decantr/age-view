function btnPress(event) {
    if (event.keyCode == 13) {
        if (validateInput()) {
            getAgeInSec();
        } else {
            errorMessageThere("visible");
            window.setTimeout(function () {
                errorMessageThere("hidden")
            }, 1000);
        }
    } else {
        document.getElementById("dob").style.color = validateInput() ? "#3F51B5" : "#E53935";
    }
}

function validateInput() {
    return /^([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})$/.test(document.getElementById("dob").value);
}

function errorMessageThere(bool) {
    document.getElementById("badInp").style.visibility = bool;
}

function getAgeInSec() {
    var intdob = document.getElementById("dob").value.match(/\d/g).join("") + 12 + "00" + "00";
    var dateDob = new Date(intdob.substr(6, 10), (intdob.substr(3, 5) - 1), intdob.substr(0, 2));
    var dateCurr = new Date();
    var intCurr = "" + dateCurr.toLocaleDateString().replace(/\//g, '') + dateCurr.getHours() + dateCurr.getMinutes() + dateCurr.getSeconds();
    var timeDiff = Math.abs(dateCurr.getTime() - dateDob.getTime());

    alert("Date of Birth: " + intdob + "\nCurrent Day: " + intCurr + "\n\nDifference in seconds: " + (timeDiff / 1000));
    return timeDiff;
}