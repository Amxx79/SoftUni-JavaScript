window.addEventListener("load", solve);

function solve() {
    const addContactButton = document.getElementById('add-btn');
    const contactList = document.getElementById('check-list');
    const savedContactList = document.getElementById('contact-list');

    addContactButton.addEventListener('click', () => {
        const newContantName = document.getElementById('name');
        const newContantPhoneNumber = document.getElementById('phone');
        const newContantCategory = document.getElementById('category');

        //CREATE NEW CONTACT HTML
        const saveButtonElement = document.createElement('button');
        saveButtonElement.classList.add('save-btn');

        const editButtonElement = document.createElement('button');
        editButtonElement.classList.add('edit-btn');

        //CREATE CONTAINER FOR THE BUTTONS
        const divButtonsContainer = document.createElement('div');
        divButtonsContainer.classList.add('buttons');

        divButtonsContainer.appendChild(editButtonElement);
        divButtonsContainer.appendChild(saveButtonElement);

        //CONTANCT DATA
        const categoryPElement = document.createElement('p');
        categoryPElement.textContent = `category:${newContantCategory.value}`;

        const phonePElement = document.createElement('p');
        phonePElement.textContent = `phone:${newContantPhoneNumber.value}`;

        const namePElement = document.createElement('p');
        namePElement.textContent = `name:${newContantName.value}`;

        //CONTAINER FOR CONTACT DATA
        const divContantDataElement = document.createElement('article');
        divContantDataElement.appendChild(namePElement);
        divContantDataElement.appendChild(phonePElement);
        divContantDataElement.appendChild(categoryPElement);

        //CONTAINER FOR ALL CONTACT
        const liContantElement = document.createElement('li');
        liContantElement.appendChild(divContantDataElement);
        liContantElement.appendChild(divButtonsContainer);

        contactList.appendChild(liContantElement);

        newContantName.value = '';
        newContantPhoneNumber.value = '';
        newContantCategory.value = '';


        editButtonElement.addEventListener('click', () => {
            newContantName.value = namePElement.textContent.substring(5);
            newContantPhoneNumber.value = phonePElement.textContent.substring(6);
            newContantCategory.value = categoryPElement.textContent.substring(9);

            liContantElement.remove();
        })

        saveButtonElement.addEventListener('click', () => {
            divButtonsContainer.remove();
            savedContactList.appendChild(liContantElement);

            const deleteButtonElement = document.createElement('button');
            deleteButtonElement.classList.add('del-btn');

            liContantElement.appendChild(deleteButtonElement);

            deleteButtonElement.addEventListener('click', () => {
                liContantElement.remove();
            })
        })
    })
}
