function solve(array) {
    let finishArr = [];
    array = array.sort((a, b) => (a > b) ? 1 : -1);
    while (array.length > 0) {
        finishArr.push(array[0]);
        array.shift();
        finishArr.push(array[array.length-1]);
        array.pop();
    }
    return finishArr;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));