function addItem() {
    const allItems = document.getElementById('items');
    const newElementTextContent = document.getElementById('newItemText');
    const creatingNewElement = document.createElement('li');
    creatingNewElement.textContent = newElementTextContent.value;

    const newDeleteElement = document.createElement('a');
    newDeleteElement.textContent = '[Delete]';
    newDeleteElement.href = '#';
    creatingNewElement.appendChild(newDeleteElement);

    newDeleteElement.addEventListener('click', () => {
        newDeleteElement.remove();
        creatingNewElement.remove();
    })

    allItems.appendChild(creatingNewElement);


}