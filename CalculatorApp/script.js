let display = document.getElementById("display");

function appendValue(val) {
    display.value += val;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function square() {
    display.value = Math.pow(parseFloat(display.value), 2);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// Keyboard Support
document.addEventListener("keydown", (e) => {
    if ("0123456789+-*/.%().".includes(e.key)) {
        appendValue(e.key);
    }
    if (e.key === "Enter") calculate();
    if (e.key === "Backspace") deleteLast();
    if (e.key === "Escape") clearDisplay();
});