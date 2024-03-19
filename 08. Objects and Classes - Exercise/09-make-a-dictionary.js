function solve(input) {
    const dictionary = {};

    const words = input.map(JSON.parse);
    for (const kvp of words) {
        let currentWord = Object.keys(kvp)[0];
        dictionary[currentWord] = kvp[currentWord];
    }

    Object.entries(dictionary)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([word, description]) => console.log(`Term: ${word} => Definition: ${description}`));
}

solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    );