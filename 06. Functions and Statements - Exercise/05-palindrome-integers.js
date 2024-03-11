function solve(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let reversedNumber = numbers[i].toString().split('').reverse().join('');
        if (numbers[i] === Number(reversedNumber)) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

solve([123,323,421,121]);
solve([32,2,232,1010]);