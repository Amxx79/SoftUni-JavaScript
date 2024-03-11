function solve (...numbers) {
    
    const sum = (a, b) => {
        return a + b;
    }
    
    let subtract = function(a, b) {
        return a - b;
    }

    console.log(subtract((sum(numbers[0], numbers[1])), numbers[2]));
}

solve(23,6,10);
solve(1,17,30);