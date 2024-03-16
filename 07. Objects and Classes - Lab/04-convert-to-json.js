function solve(f, s, t) {
    let guy = {
        name: f,
        lastName: s,
        hairColor: t,
    }
    let string = JSON.stringify(guy);
    console.log(string);
}

solve('George', 'Jones', 'Brown');