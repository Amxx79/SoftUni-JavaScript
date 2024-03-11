

function solve(start, end) {

    const getEveryElementsFromAscii = (start, end) => {
        let arrayWithSymbols = [];
        for (let i = start.charCodeAt(0) + 1; i < end.charCodeAt(0); i++) {
            arrayWithSymbols.push(String.fromCharCode(i));
        }
    
        return arrayWithSymbols;
    }
    
    const getSorted = getSorter(start, end);
    let symbols = getEveryElementsFromAscii(getSorted[0], getSorted[1]);
    console.log(symbols.join(' '));

    function getSorter(start, end) {
        const chars = [start, end];
        chars.sort();
        return chars;
    }
    

}

solve('a', 'd');
solve('#',':');