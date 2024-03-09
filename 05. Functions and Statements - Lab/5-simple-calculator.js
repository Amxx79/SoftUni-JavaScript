function solve(firstNum, secondNum, operation) {
    let calculations = (a, b, c) => {
        if (c === 'add') {
            return a + b;
        } else if (c === 'subtract') {
            return a - b;
        } else if (c === 'multiply') {
            return a * b;
        } else if (c === 'divide') {
            return a / b;
        }
    }

    let result = calculations(firstNum, secondNum, operation);
    console.log(result);

}

solve(5,5,'add');