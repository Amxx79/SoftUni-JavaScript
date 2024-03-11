function solve(number) {
    let castedNumber = number
    .toString()
    .split('')
    .map(Number);

    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < castedNumber.length; i++) {
        if (castedNumber[i] % 2 === 0) {
            evenSum += castedNumber[i];
        } else {
            oddSum += castedNumber[i];
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

solve(1000435);
solve(3495892137259234);