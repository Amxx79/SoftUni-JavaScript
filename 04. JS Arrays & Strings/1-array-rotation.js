function solve (array, rotateTimes) {
    for (let i = 0; i < rotateTimes; i++) {
        let firstElements = array.shift();
        array.push(firstElements);
    }
    console.log(array.join(' '));
}

solve([51, 47, 32, 61, 21], 2);
solve([32, 21, 61, 1], 4);