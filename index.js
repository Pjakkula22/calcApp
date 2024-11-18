// Append input to the display
const display = document.getElementById("display");

function appendToDisplay(input) {
    if (input === 'C') {
        clearDisplay();
    } else {
        display.value += input;
    }
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Calculate the result
function calculate() {
    try {
        const input = display.value;

        // Handle division by zero
        if (/\/0(?!\d)/.test(input)) {
            display.value = "Cannot divide by zero!";
            return;
        }

        // Evaluate the input expression
        display.value = eval(input);
    } catch (error) {
        display.value = "Error";
    }
}
