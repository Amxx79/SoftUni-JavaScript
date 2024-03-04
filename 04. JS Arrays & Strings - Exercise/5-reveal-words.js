function solve(words, text) {
    let textArray = text.split(' ');

    for (const eachWord of textArray) {
        if (!eachWord.includes('*')) {
            continue;
        }
        else {
            let index = textArray.findIndex(textArray => textArray === eachWord);
            let allChangingWords = words.split(', ');
            for (const currentWord of allChangingWords) {
                if (currentWord.length === eachWord.length) {
                    textArray[index] = currentWord;
                }
            }
        }
    }
    console.log(textArray.join(' '));
}

solve('great, learning','softuni is ***** place for ******** new programming languages');
solve('great','softuni is ***** place for learning new programming languages');