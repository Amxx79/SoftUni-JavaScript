window.addEventListener("load", solve);

function solve() {
    const addButton = document.getElementById('add-btn');

    const placeInputElement = document.getElementById('place');
    const actionInputElement = document.getElementById('action');
    const personInputElement = document.getElementById('person');

    const ulListElements = document.getElementById('task-list');
    const doneListElement = document.getElementById('done-list');

    addButton.addEventListener('click', () => {
        //CHECK IF THE FIELDS ARE FULL
        if (!placeInputElement.value || !actionInputElement.value | !personInputElement.value) {
            return;
        }

        //SECTION BUTTONS IN DIV
        const doneButtonElement = document.createElement('button');
        doneButtonElement.classList.add('done');
        doneButtonElement.textContent = 'Done';

        const editButtonElement = document.createElement('button');
        editButtonElement.classList.add('edit');
        editButtonElement.textContent = 'Edit';

        const divButtonsHolder = document.createElement('div');
        divButtonsHolder.classList.add('buttons');

        divButtonsHolder.appendChild(doneButtonElement);
        divButtonsHolder.appendChild(editButtonElement);

        //SECTION ARTICLE
        const personPElement = document.createElement('p');
        personPElement.textContent = `Person: ${personInputElement.value}`;

        const actionPElement = document.createElement('p');
        actionPElement.textContent = `Action: ${actionInputElement.value}`;

        const placePElement = document.createElement('p');
        placePElement.textContent = `Place: ${placeInputElement.value}`;

        const articleLiElement = document.createElement('article');
        articleLiElement.appendChild(placePElement);
        articleLiElement.appendChild(actionPElement);
        articleLiElement.appendChild(personPElement);

        //Make Holder For Article
        const liHolderElement = document.createElement('li');
        liHolderElement.classList.add('clean-task');
        liHolderElement.appendChild(articleLiElement);
        liHolderElement.appendChild(divButtonsHolder);

        //Append to UL
        ulListElements.appendChild(liHolderElement);

        //CLEAR THE INPUTS
        placeInputElement.value = '';
        actionInputElement.value = '';
        personInputElement.value = '';

        //EDIT BUTTON OPERATION
        editButtonElement.addEventListener('click', () => {
            placeInputElement.value = placePElement.textContent.substring(7);
            actionInputElement.value = actionPElement.textContent.substring(8)
            personInputElement.value = personPElement.textContent.substring(8);

            liHolderElement.remove();
        })

        //Done Button Element
        doneButtonElement.addEventListener('click', () => {
            divButtonsHolder.remove();
            const deleteButtonElement = document.createElement('button');
            deleteButtonElement.classList.add('delete');
            deleteButtonElement.textContent = 'Delete';

            liHolderElement.appendChild(deleteButtonElement);

            doneListElement.appendChild(liHolderElement);

            deleteButtonElement.addEventListener('click', () => {
                liHolderElement.remove();
            })
        })
    })
}
