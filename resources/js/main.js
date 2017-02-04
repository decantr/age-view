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
    var currentday = new Date();
    var intcurrentday = "" + currentday.toLocaleDateString().replace(/\//g, '') + currentday.getHours() + currentday.getMinutes() + currentday.getSeconds();
    alert("Date of Birth: " + intdob + "\nCurrent Day: " + intcurrentday + "\n\nDifference in seconds: " + (intcurrentday - intdob));
}