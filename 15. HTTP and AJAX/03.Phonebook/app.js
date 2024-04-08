function attachEvents() {
    const loadButtonElement = document.getElementById('btnLoad');
    const createButtonElement = document.getElementById('btnCreate');

    const newNameElement = document.getElementById('person');
    const newPhoneElement = document.getElementById('phone');


    const baseUrl = 'http://localhost:3030/jsonstore/phonebook';
    const phoneBook = document.getElementById('phonebook');

    loadButtonElement.addEventListener('click', async () => {
        while(phoneBook.firstChild) {
            phoneBook.removeChild(phoneBook.firstChild);
        }

        const allContancts = await fetch(baseUrl);
        const parseData = await allContancts.json();
        for (const phoneContant of Object.values(parseData)) {
            const liElement = document.createElement('li');
            liElement.textContent = `${phoneContant.person}: ${phoneContant.phone}`;

            const buttonForLi = document.createElement('button');
            buttonForLi.textContent = 'Delete';
            phoneBook.appendChild(liElement);

            liElement.appendChild(buttonForLi);
            let id = (phoneContant._id);
            liElement.setAttribute('value', id);
            buttonForLi.addEventListener('click', async () => {
                phoneBook.removeChild(liElement);

                const deleteFromServer = await fetch(`${baseUrl}/${liElement.getAttribute('value')}`, {
                    method: "DELETE",
                });

                const parsedData = await deleteFromServer.json();
                console.log(parsedData);
            })
        }
    })

    createButtonElement.addEventListener('click', async () => {

        await fetch(baseUrl, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                "person": newNameElement.value,
                "phone": newPhoneElement.value,
            })
        })
    }
    )
}

attachEvents();