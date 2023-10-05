let outputValue = '';

function appendToOutput(value) {
    outputValue += value;
    document.getElementById('output').value = outputValue;
}

function clearOutput() {
    outputValue = '';
    document.getElementById('output').value = '';
}

function calculateResult() {
    try {
        const result = eval(outputValue);
        document.getElementById('output').value = result;
        outputValue = result.toString();
    } catch (error) {
        document.getElementById('output').value = 'Error';
        outputValue = '';
    }
}
