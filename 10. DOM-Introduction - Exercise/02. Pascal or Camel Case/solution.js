function solve() {
    //TODO...
    const currentTextState = document.getElementById('text');
    const typeOfConvention = document.getElementById('naming-convention');
    const showResult = document.getElementById('result');

    const convertToPascalCase = (currentTextState) =>
        currentTextState.value
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join('');

    if (typeOfConvention.value === 'Camel Case') {
        const result = convertToPascalCase(currentTextState)
            .charAt(0)
            .toLowerCase()
            + convertToPascalCase(currentTextState).slice(1);
        showResult.textContent = result;
    } else if (typeOfConvention.value === 'Pascal Case') {
        const result = convertToPascalCase(currentTextState);
        showResult.textContent = result;
    } else {
        const result = 'Error!'
        showResult.textContent = result;
    }
}