function solve(text, word) {
    let textArray = text.split(' ');
    let counter = 0;
    
    for (const currentWord of textArray) {
        if (currentWord === word){
            counter++;
        }
    }
    console.log(counter);
}

solve('This is a word and it also is a sentence','is');
solve('softuni is great place for learning new programming languages',
'softuni'
);