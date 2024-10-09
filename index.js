let display = document.getElementById("display")
function one() {
    display.textContent+="1"
}
function two() {
    display.textContent+="2"
}
function three() {
    display.textContent+="3"
}
function four() {
    display.textContent+="4"
}
function five() {
    display.textContent+="5"
}
function six() {
    display.textContent+="6"
}
function seven() {
    display.textContent+="7"
}
function eight() {
    display.textContent+="8"
}
function nine() {
    display.textContent+="9"
}
function zero() {
    display.textContent+="0"
}
function dot() {
    if (!display.textContent.includes(".")) {
        display.textContent += ".";
    }
}
function allClear() {
    display.textContent =""
}
function plus() {
   if (display.textContent) {
     display.textContent+="+"
   }
}
function minus() {
    if (display.textContent) {
        display.textContent+="-"
      }
}
function multiply() {
    if (display.textContent) {
        display.textContent+="×"
      }
}
function division() {
    if (display.textContent) {
        display.textContent+="/"
      }
}
function percent() {
    if (display.textContent) {
        display.textContent+="%"
      }
}
function dlt(){
    display.textContent = (display.textContent).slice(0,-1)
}
function result() {
    try {
        let sum= display.textContent.replace('×', '*');
        display.textContent = eval(expression);
        
    } catch (error) {
        display.textContent = "ERROR"
    }
    
}
let openParenthesis = true

function addParenthesis() {
    if (openParenthesis) {
        display.textContent += "(";
        openParenthesis = false;
    } else {
        display.textContent += ")";
        openParenthesis = true;
    }
}