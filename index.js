//Calculator App

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}
 function clearDisplay(){
    display.value ="";
 }

 function calculate() {
    try {
        const input = display.value;

        // Handle division by zero
        if (/\/0(?!\d)/.test(input)) { // Matches "/0" but not "/0.1"
            display.value = "Cannot divide by zero!";
            return;
        }

        // Validate input: allow only numbers, operators, and decimal points
        if (/[^0-9+\-*/. ]/.test(input)) {
            display.value = "Invalid input!";
            return;
        }

        // Evaluate the input expression
        display.value = eval(input);
    } catch (error) {
        display.value = "Error";
    }
}