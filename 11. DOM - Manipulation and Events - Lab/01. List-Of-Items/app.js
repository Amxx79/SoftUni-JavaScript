function addItem() {
    const getAllElements = document.getElementById('items');
    const newItemText = document.getElementById('newItemText');

    const newElement = document.createElement('li');
    newElement.textContent = newItemText.value;
    
    getAllElements.appendChild(newElement);
}