function solve(word) {
    const matches = word.matchAll(/[A-Z][a-z]*/g);

    const array = Array.from(matches).map(match => match[0]);

    console.log(array.join(', '));
}

solve ('SplitMeIfYouCanHaHaYouCantOrYouCan');