const display = document.getElementById("display");

function appendToDisplay(input){
    console.log("Input: ", input);
    display.value += input;
    console.log("Display value: ", display.value);
}

function toggleSign() {
    let currentValue = parseFloat(display.value);
    if (currentValue !== 0) {
        display.value = (currentValue > 0) ? "-" + currentValue : Math.abs(currentValue);
    }
}

function calculatePercentage() {
    display.value = parseFloat(display.value) / 100;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try {
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}