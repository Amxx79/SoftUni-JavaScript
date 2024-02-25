
function solve(number) {
    let input = typeof(number);
    if (input === 'number') {
        result = Math.pow(number, 2) * Math.PI;
        console.log(result.toFixed(2));
    }

    else {
        console.log(`We can not calculate the circle area, because we receive a ${input}.`);
    }
}

solve(5);
solve('name');