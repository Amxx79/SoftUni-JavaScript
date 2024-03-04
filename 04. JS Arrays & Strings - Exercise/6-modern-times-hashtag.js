function solve (input) {
    const regEx = /#[A-z]+/g;
    const matches = input.match(regEx);
    for (const match of matches) {
        let currentWord = match.split('#');
        console.log(currentWord[1]);
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');