function solve (array, nthElement) {
    let finishArray = [];
    for (let i = 0; i < array.length; i += nthElement) {
        finishArray.push(array[i]);
    }
    return finishArray;
}

console.log(solve(['5', '20', '31', '4', '20'], 2));
console.log(solve(['dsa',
'asd', 
'test', 
'tset'], 
2
));