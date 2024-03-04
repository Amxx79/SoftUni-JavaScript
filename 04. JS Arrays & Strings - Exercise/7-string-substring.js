function solve(word, text) {
    const wordsArray = text.toLowerCase().split(' ');

    if (wordsArray.includes(word.toLowerCase())) {
        console.log(word);
    }
    else {
        console.log(`${word} not found!`)
    }

}

solve('javascript','JavaScript is the best programming language');
solve('python','JavaScript is the best programming language');