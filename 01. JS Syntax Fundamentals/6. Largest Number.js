let biggestNum = Math.min;

function solve(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        biggestNum = num1;
    }

    else if (num2 > num1 && num2 > num3) {
        biggestNum = num2;
    }

    else if (num3 > num1 && num3 > num2) {
        biggestNum = num3;
    }
    console.log(`The largest number is: ${biggestNum}.`);
}

solve(5, -3, 16);
solve(-3, -5, -22.5);