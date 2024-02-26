function solve(age) {
    if (age % 4 == 0 && age % 100 !== 0 || age % 400 == 0) {
        console.log('yes');
    } else {
        console.log('no');
    }
}

solve(1984);
solve(2003);
solve(4);