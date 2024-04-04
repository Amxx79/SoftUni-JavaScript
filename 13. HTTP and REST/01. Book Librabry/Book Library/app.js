function attachEvents() {
    const submitButton = document.querySelector('#form button');

    submitButton.addEventListener('click', () => {
        const bookTitleElement = document.querySelector('#form input[type=text][name=title]');
        const bookAuthorElement = document.querySelector('#form input[type=text][name=author]');

        const table = document.querySelector('#books tbody');

        const editButtonElement = document.createElement('button');
        editButtonElement.textContent = 'Edit';
        const deleteButtonElement = document.createElement('button');
        deleteButtonElement.textContent = 'Delete';
        const tdWithButtons = document.createElement('td');
        
        const tdAuthor = document.createElement('td');
        const tdBookName = document.createElement('td');
        const trElement = document.createElement('tr');

        tdBookName.textContent = bookTitleElement.value;
        tdAuthor.textContent = bookAuthorElement.value;

        tdWithButtons.appendChild(editButtonElement);
        tdWithButtons.appendChild(deleteButtonElement);

        trElement.appendChild(tdBookName);
        trElement.appendChild(tdAuthor);
        trElement.appendChild(tdWithButtons);

        table.appendChild(trElement);

    })

}

attachEvents();
