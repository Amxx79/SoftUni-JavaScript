function addItem() {
    const newInputElement = document.getElementById('newItemText');
    const newInputValue = document.getElementById('newItemValue');

    const menu = document.getElementById('menu');
    const newElement = document.createElement('option');
    
    newElement.textContent = newInputElement.value;
    newElement.value = newInputValue.value;

    menu.appendChild(newElement);
    newInputElement.value = '';
    newInputValue.value = '';
}