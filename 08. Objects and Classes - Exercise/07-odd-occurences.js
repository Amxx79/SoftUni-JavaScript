function solve(input) {
    let words = input.split(' ');
    let result = {};
    for (const word of words) {
        if (!result.hasOwnProperty(word.toLowerCase())) {
            result[word.toLowerCase()] = 0;
        }

        result[word.toLowerCase()] += 1;
    }
    const finishWords = [];
    for (const word in result) {
        if (result[word] % 2 !== 0) {
            finishWords.push(word);
        }
    }
    console.log(finishWords.join(' '));
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');