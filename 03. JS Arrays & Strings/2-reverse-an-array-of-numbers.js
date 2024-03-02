function solve(numberTake, numbers) {
    let array = numbers.slice(0, numberTake)
        .reverse()
        .join(' ');

        console.log(array);
}

solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);