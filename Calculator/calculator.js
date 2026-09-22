const display = document.getElementById("display");
function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}
// Track backspace mutations via string slicing manipulation mechanics
function deleteLast() {
    display.value = display.value.slice(0, -1);
}
// Parse execution string and return arithmetic calculation result evaluation
function calculate() {
try {
// Native runtime parsing logic of current algebraic content
        display.value = eval(display.value);
    } catch (error) {
// Route exception management gracefully to notify the client user interface
        display.value = "Error";
    }
}