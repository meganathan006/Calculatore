function appendValue(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function clearOne() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1); // Removes the last character
}

function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        alert('Invalid input');
    }
}
