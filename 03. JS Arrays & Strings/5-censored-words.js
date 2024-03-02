function solve(text, word) {
    let censored = '';
    while (text.includes(word)){
        censored = text.replace(word, '*'.repeat(word.length));
        text = censored;
    }
    console.log(censored);
}

solve('A small sentence with some words', 'small');