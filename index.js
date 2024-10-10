let display = document.getElementById("display")

function one() {
    if (display.textContent === "ERROR") {
        display.textContent = ""
    }
    display.textContent += "1"
}
function two() {
    if (display.textContent === "ERROR") {
        display.textContent = ""
    }
    display.textContent += "2"
}
function three() {
    if (display.textContent === "ERROR") {
        display.textContent = ""
    }
    display.textContent += "3"
}
function four() {
    if (display.textContent === "ERROR") {
        display.textContent = ""
    }
    display.textContent += "4"
}
function five() {
    if (display.textContent === "ERROR") {
        display.textContent = ""
    }
    display.textContent += "5"
}
function six() {
    if (display.textContent === "ERROR") {
        display.textContent = ""
    }
    display.textContent += "6"
}
function seven() {
    if (display.textContent === "ERROR") {
        display.textContent = ""
    }
    display.textContent += "7"
}
function eight() {
    if (display.textContent === "ERROR") {
        display.textContent = ""
    }
    display.textContent += "8"
}
function nine() {
    if (display.textContent === "ERROR") {
        display.textContent = ""
    }
    display.textContent += "9"
}
function zero() {
    if (display.textContent === "ERROR") {
        display.textContent = ""
    }
    display.textContent += "0"
}
function dot() {
    if (display.textContent === "ERROR") {
        display.textContent = ""
    }
    if (!display.textContent.includes(".")) {
        display.textContent += ".";
    }
}
function allClear() {
    display.textContent = ""
}
function plus() {
    if (display.textContent === "ERROR") {
        display.textContent = ""
    }
    if (display.textContent) {
        display.textContent += "+"
    }
}
function minus() {
    if (display.textContent === "ERROR") {
        display.textContent = ""
    }
    if (display.textContent) {
        display.textContent += "-"
    }
}
function multiply() {
    if (display.textContent === "ERROR") {
        display.textContent = ""
    }
    if (display.textContent) {
        display.textContent += "×"
    }
}
function division() {
    if (display.textContent === "ERROR") {
        display.textContent = ""
    }
    if (display.textContent) {
        display.textContent += "/"
    }
}
function percent() {
    if (display.textContent === "ERROR") {
        display.textContent = ""
    }
    if (display.textContent) {
        display.textContent += "%"
    }
}
function dlt() {
    if (display.textContent === "ERROR") {
        display.textContent = ""
    }
    display.textContent = (display.textContent).slice(0, -1)
}

function result() {
    if (display.textContent === "ERROR") {
        display.textContent = ""
    }
    try {
        let sum = display.textContent.replace("×", "*")
        display.textContent = eval(sum)

    } catch (error) {
        display.textContent = "ERROR"
    }

}


let openParenthesis = true

function addParenthesis() {
    if (display.textContent === "ERROR") {
        display.textContent = ""
    }
    if (openParenthesis) {
        display.textContent += "(";
        openParenthesis = false;
    } else {
        display.textContent += ")";
        openParenthesis = true;
    }
}