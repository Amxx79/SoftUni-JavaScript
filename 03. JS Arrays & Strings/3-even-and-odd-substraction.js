function solve(numbers) {
    let evenNumbers = numbers.filter(num => num % 2 == 0)
    .reduce((a, b) => a + b, 0);
    let oddNumbers = numbers.filter(num => num % 2 != 0)
    .reduce((a, b) => a + b, 0);;

    console.log(evenNumbers - oddNumbers);
}

solve([1,2,3,4,5,6]);
solve([3,5,7,9]);