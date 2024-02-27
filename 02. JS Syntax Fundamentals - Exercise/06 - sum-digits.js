function solve(number) {
    let sum = 0;

    while(number > 0) {
        sum += Math.trunc(number % 10);
        number = number / 10;
    }

    console.log(sum);
}

solve(245678);
solve(97561);
solve(543);