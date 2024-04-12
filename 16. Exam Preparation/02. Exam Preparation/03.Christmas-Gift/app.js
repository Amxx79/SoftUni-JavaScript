function solve() {
    const baseUrl = 'http://localhost:3030/jsonstore/gifts';

    const fetchPresentButtonElement = document.getElementById('load-presents');
    const giftListElements = document.getElementById('gift-list');
    const addGift = document.getElementById('add-present');
    const editGift = document.getElementById('edit-present');

    //ADD GIFT PROPERTIES
    const newGiftNameElement = document.getElementById('gift');
    const newGiftForElement = document.getElementById('for');
    const newGiftPriceElement = document.getElementById('price');

    fetchPresentButtonElement.addEventListener('click', () => {
        fetchGifts();
    })

    addGift.addEventListener('click', () => {
        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                gift: newGiftNameElement.value,
                for: newGiftForElement.value,
                price: newGiftPriceElement.value,
                _id: '',
            })
        })
            .then(console.log('done'));

        fetchGifts();
        newGiftNameElement.value = '';
        newGiftForElement.value = '';
        newGiftPriceElement.value = '';
    })


    const fetchGifts = function () {
        fetch(baseUrl)
            .then(result => result.json())
            .then(data => {
                giftListElements.innerHTML = '';
                for (const gift of Object.values(data)) {
                    //CREATE BUTTONS AND CONTAINER FOR IT
                    const deleteButton = document.createElement('button');
                    deleteButton.classList.add('delete-btn');
                    deleteButton.textContent = 'Delete';

                    const changeButton = document.createElement('button');
                    changeButton.classList.add('change-btn');
                    changeButton.textContent = 'Change';

                    const divButtonsContainer = document.createElement('div');
                    divButtonsContainer.classList.add('buttons-container');
                    divButtonsContainer.appendChild(deleteButton);
                    divButtonsContainer.appendChild(changeButton);

                    //CREATE PARAPGRAPHS AND CONTAINER FOR IT

                    const pricePElement = document.createElement('p');
                    pricePElement.textContent = gift.price;

                    const forPElement = document.createElement('p');
                    forPElement.textContent = gift.for;

                    const giftNamePElement = document.createElement('p');
                    giftNamePElement.textContent = gift.gift;

                    const containerPElements = document.createElement('div');
                    containerPElements.classList.add('content');
                    containerPElements.appendChild(giftNamePElement);
                    containerPElements.appendChild(forPElement);
                    containerPElements.appendChild(pricePElement);

                    //CONTAINER FOR WHOLE GIFT
                    const giftContainer = document.createElement('div');
                    giftContainer.classList.add('gift-sock')
                    giftContainer.appendChild(containerPElements);
                    giftContainer.appendChild(divButtonsContainer);

                    giftListElements.appendChild(giftContainer);

                    changeButton.addEventListener('click', () => {
                        newGiftNameElement.value = giftNamePElement.textContent;
                        newGiftForElement.value = forPElement.textContent;
                        newGiftPriceElement.value = pricePElement.textContent;

                        giftContainer.remove();
                        editGift.removeAttribute('disabled');
                        addGift.setAttribute('disabled', 'disabled');
                        console.log(data[gift]);
                        editGift.addEventListener('click', () => {
                            fetch(`${baseUrl}/${gift._id}`, {
                                method: 'PUT',
                                headers: {
                                    'content-type': 'application/json',
                                },
                                body: JSON.stringify({
                                    gift: newGiftNameElement.value,
                                    for: newGiftForElement.value,
                                    price: newGiftPriceElement.value,
                                    _id: gift._id,
                                })
                            })
                            fetchGifts();
                        })
                    })

                    deleteButton.addEventListener('click', () => {
                        fetch(`${baseUrl}/${gift._id}`,{
                            method: 'DELETE',
                        })

                        giftContainer.remove();
                        fetchGifts();
                    })
                }
            });
    }
}

solve();