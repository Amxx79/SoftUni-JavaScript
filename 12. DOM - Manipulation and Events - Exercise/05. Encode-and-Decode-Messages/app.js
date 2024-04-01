function encodeAndDecodeMessages() {
    const buttonDecode = document.querySelector('#main div button');
    const buttonEndcode = document.querySelector('#main div:last-of-type button');

    buttonDecode.addEventListener('click', () => {
        const textAreaFirst = document.querySelector('#main div textarea');
        const textAreaSecond = document.querySelector('#main div:last-of-type textarea');
        let decodedText = '';

        for (const symbol of textAreaFirst.value) {
            let asciiRepresent = symbol.charCodeAt();
            asciiRepresent += 1;
            let newSymbol = String.fromCharCode(asciiRepresent);

            decodedText += newSymbol;
        }
        textAreaFirst.value = "";
        textAreaSecond.value = decodedText;
    })

    buttonEndcode.addEventListener('click', () => {
        const textAreaSecond = document.querySelector('#main div:last-of-type textarea');
        let encodedText = '';

        for (const symbol of textAreaSecond.value) {
            let asciiRepresent = symbol.charCodeAt();
            asciiRepresent -= 1;
            let newSymbol = String.fromCharCode(asciiRepresent);

            encodedText += newSymbol;
        }

        textAreaSecond.value = encodedText;
    })
}