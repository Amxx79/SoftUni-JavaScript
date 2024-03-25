function generateReport() {
    const thElements = document.querySelectorAll('table thead th')
    const trElements = document.querySelectorAll('table tbody tr')
    const outputElement = document.getElementById('output');

    const activeColumns = Array.from(thElements)
        .map(thElements => {
            const isCheked = thElements.querySelector('input');

            return {
                name: thElements.textContent.trim(),
                active: isCheked.checked,
            };
        });

    const report = Array
        .from(trElements)
        .map(trElement => {
            const tdElements = trElement.querySelectorAll('td');

            const result = Array.from(tdElements)
                .reduce((data, tdElements, i) => {
                    if (!activeColumns[i].active) {
                        return data;
                    }

                    const columnName = activeColumns[i].name;
                    data[columnName] = tdElements.textContent;

                    return data;
                }, {})
            return result;
        });

        outputElement.value = JSON.stringify(report, null, 2);
}