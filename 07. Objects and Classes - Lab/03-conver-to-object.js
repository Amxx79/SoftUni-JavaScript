function solve(string) {
    let object = JSON.parse(string);

    for (const key in object) {
        console.log(`${key}: ${object[key]}`)
    }
}

solve('{"name": "George", "age": 40, "town": "Sofia"}');