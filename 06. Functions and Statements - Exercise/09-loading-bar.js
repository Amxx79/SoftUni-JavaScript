function solve(number) {
    console.log(`${number}% [${'%'.repeat(number/10)}` + `.`.repeat(10 - number/10) + `]`);
    if (number !== 100) {
        console.log('Still loading...');
    } else {
        console.log('Complete!');
    }
}

solve(30);
solve(50);
solve(100);