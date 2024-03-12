function solve(number) {
    const getDivisors = function (number) {
        let divisors = [];
        for (let i = number - 1; i >= 1; i--) {
            if (number % i === 0) {
                divisors.push(i);
            }
        }
        let sumOfDivisors = 0;
        divisors.forEach(a => sumOfDivisors += a);
        return sumOfDivisors;
    }

    if (getDivisors(number) === number) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}
solve(6);
solve(28);
solve(1236498);