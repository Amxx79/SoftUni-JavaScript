function solve(number) {
    let num = number;
    for(let i = 1; i <= 10; i++) {
        console.log(`${number} X ${i} = ${num * i}`);
    }
}

solve(2);