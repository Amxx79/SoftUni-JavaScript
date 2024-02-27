function solve(number, ...args) {
    let num = Number(number);

    for (let i = 0; i < args.length; i++) {
        if (args[i] === 'chop') {
            num /= 2;
            console.log(num);
        } else if (args[i] === 'dice') {
            num = Math.sqrt(num);
            console.log(num);
        } else if (args[i] === 'spice') {
            num += 1;
            console.log(num);
        } else if (args[i] === 'bake') {
            num *= 3;
            console.log(num);
        } else if (args[i] === 'fillet') {
            num = num - (num * 0.20);
            console.log(num);
        }
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');