function solve(a, b, c) {
    const smallest = function(a, b, c) {
        if (a < b && a < c){
            return a;
        } else if (b < a && b < c) {
            return b;
        } else {
            return c;
        }
    }

    console.log(smallest(a, b, c));
}

solve(2, 5, 3);
solve(2, 5, 1);