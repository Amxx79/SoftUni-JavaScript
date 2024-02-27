function solve(number) {
    let numberText = number.toString();
    let isSame = true;
    let currentDigit = numberText[0];
    let sum = 0;

    for (let i = 0; i < numberText.length; i++) {
        if (currentDigit !== numberText[i]) {
            isSame = false;
        }

        currentDigit = numberText[i];
        sum += Number(currentDigit);
    }

    console.log(isSame);
    console.log(sum);
}

solve(2222222);
solve(1234);