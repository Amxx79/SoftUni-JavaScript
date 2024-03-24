function subtract() {
    const firstNum = document.getElementById('firstNumber').value;
    const secondNumber = document.getElementById('secondNumber').value;
    const result = document.getElementById('result');

    const resultCalc = Number(firstNum) - Number(secondNumber);

    result.textContent = resultCalc;
}