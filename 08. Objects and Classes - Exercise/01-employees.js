function solve(input) {
    const objects = [];

    for (const name of input) {
        let currentName = {
            name,
            personaNumber: name.length,
        }
        objects.push(currentName);
    }
    for (const human of objects) {
        console.log(`Name: ${human.name} -- Personal Number: ${human.personaNumber}`);
    }
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );