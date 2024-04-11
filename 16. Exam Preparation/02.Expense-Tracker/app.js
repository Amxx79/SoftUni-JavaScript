window.addEventListener("load", solve);

function solve() {

    const ulListPreviewElement = document.getElementById('preview-list');

    let expenseTypeElement = document.getElementById('expense');
    let amountElement = document.getElementById('amount');
    let dataElement = document.getElementById('date');

    const addButtonElement = document.getElementById('add-btn');

    addButtonElement.addEventListener('click', () => {
        if (!expenseTypeElement.value || !amountElement.value || !dataElement.value) {
            return;
        }

        const editButton = document.createElement('button');
        editButton.classList.add('btn', 'edit');
        editButton.textContent = 'edit';
        const okButton = document.createElement('button');
        okButton.classList.add('btn', 'ok');
        okButton.textContent = 'ok';

        const divContainerButtons = document.createElement('div');
        divContainerButtons.classList.add('buttons');
        divContainerButtons.appendChild(editButton);
        divContainerButtons.appendChild(okButton);

        const typeParagraph = document.createElement('p');
        typeParagraph.textContent = `Type: ${expenseTypeElement.value}`;

        const amountParagraph = document.createElement('p');
        amountParagraph.textContent = `Amount: ${amountElement.value}$`;

        const dateParagraph = document.createElement('p');
        dateParagraph.textContent = `Date: ${dataElement.value}`;

        const arcticleForParagraphs = document.createElement('article');
        arcticleForParagraphs.appendChild(typeParagraph);
        arcticleForParagraphs.appendChild(amountParagraph);
        arcticleForParagraphs.appendChild(dateParagraph);

        const listItemHolder = document.createElement('li');
        listItemHolder.classList.add('expense-item');

        listItemHolder.appendChild(arcticleForParagraphs);
        listItemHolder.appendChild(divContainerButtons);

        ulListPreviewElement.appendChild(listItemHolder);


        addButtonElement.setAttribute('disabled', 'disabled');
        expenseTypeElement.value = '';
        amountElement.value = '';
        dataElement.value = '';

        editButton.addEventListener('click', () => {
            expenseTypeElement.value = typeParagraph.textContent.substring(6);
            amountElement.value = amountParagraph.textContent.substring(8, amountParagraph.textContent.length - 1);
            dataElement.value = dateParagraph.textContent.substring(6);

        })
    })



}
//TODO