function colorize() {
    // TODO
    const tdElements = document.querySelectorAll('table tr:nth-last-child(2n)');
    for (const element of tdElements) {
        element.style.backgroundColor = 'Teal';
    }

}