function btnPress(event) {
    if (event.keyCode == 13) {
        if (validateInput()) {
            alert("good");
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