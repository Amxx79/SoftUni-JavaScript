function solve() {
    const getTextElement = document.getElementById('input');
    const output = document.getElementById('output');

    const text = getTextElement.value;

    const result = text.split('.')
        .filter(sentence => !!sentence)
        .reduce((result, sentence, i) => {
            const resultIndex = Math.floor(i/3);
            if (!result[resultIndex]) {
                result[resultIndex] = []
            }

            result[resultIndex].push(sentence.trim());

            return result;
            
        }, [])
        .map(sentences => `<p>${sentences.join('. ')}.</p>`)
        .join('\n');


        output.innerHTML = result;
}