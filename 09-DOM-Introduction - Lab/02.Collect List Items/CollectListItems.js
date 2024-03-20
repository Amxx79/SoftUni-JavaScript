function extractText() {
    const elements = document.getElementById('items');
    const textArea = document.getElementById('result');

    textArea.value = elements.textContent;
}