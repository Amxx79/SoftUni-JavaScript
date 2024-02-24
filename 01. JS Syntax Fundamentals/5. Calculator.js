function solve (num1, num2, op) {
    if (op == '+') {
        console.log(num1 + num2);
    }

    else if (op == '-') {
        console.log(num1 - num2);
    }
    
    else if (op == '*') {
        console.log(num1 * num2);
    }

    else if (op == '/') {
        console.log(num1 / num2);
    }

    else if (op == '%') {
        console.log(num1 % num2);
    }

    else if (op == '**') {
        console.log(num1 ** num2);
    }
}

solve(5, 6, '+');
solve(2, 1, '-');
solve(10, 5, '*');
solve(10, 2, '/');
solve(11, 2, '%');
solve(2, 3, '**');