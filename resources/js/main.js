function btnPress(event) {
    if (event.keyCode == 13) {
        if (isInputValid()) {
            alert(getAgeInSec());
        } else {
            setErrorMessage("visible");
            window.setTimeout(function () {
                setErrorMessage("hidden")
            }, 1000);
        }
    } else {
        document.getElementById("dob").style.color = isInputValid() ? "#3F51B5" : "#E53935";
    }
}

function setErrorMessage(bool) {
    document.getElementById("badInp").style.visibility = bool;
}

function isInputValid() {
    var dobBox = document.getElementById("dob").value;
    return /^([0-3][0-9])\/([0-1][0-9])\/([0-9]{4})$/.test(dobBox);
}


function getAgeInSec() {
    var dob = document.getElementById("dob").value;
    var dateDob = new Date(dob.substring(6, 10), (dob.substring(3, 5) - 1), dob.substring(0, 2));
    var dateCurr = new Date();
    var timeDiff = Math.abs(dateCurr.getTime() - dateDob.getTime());
    timeDiff = Math.floor(timeDiff / 1000);

    return "Date of Birth: " + dateDob.getTime() + "\nCurrent Day: " + dateCurr.getTime() + "\n\nDifference in seconds: " + (timeDiff);
}