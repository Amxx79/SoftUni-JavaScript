function solve(a, b) {
    const getFactorial = a => {

        if (a === 1) {
            return 1;
        }

        return a * getFactorial(a - 1);
    }
    const result = getFactorial(a) / getFactorial(b);
    console.log(result.toFixed(2));
}

solve(5, 2);
solve(6, 2);