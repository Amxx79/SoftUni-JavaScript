function solve() {
    const baseUrl = 'http://localhost:3030/jsonstore/games';

    const gameListElement = document.getElementById('games-list');

    const loadGameButtonElement = document.getElementById('load-games');
    const addNewGameButtonElement = document.getElementById('add-game');

    //ADD NEW GAME BUTTONS
    const newGameName = document.getElementById('g-name');
    const newGameType = document.getElementById('type');
    const newGameMaxPlayers = document.getElementById('players');


    //LOAD ALL GAMES FUNCTION
    const fetchAllGames = function () {
        fetch(baseUrl)
            .then(result => result.json())
            .then(data => {
                gameListElement.innerHTML = '';

                for (const game of Object.values(data)) {
                    //CREATE BUTTONS OF THE GAME
                    const deleteButtonElement = document.createElement('button');
                    deleteButtonElement.classList.add('delete-btn');
                    deleteButtonElement.textContent = 'Delete';

                    const changeButtonElement = document.createElement('button');
                    changeButtonElement.classList.add('change-btn');
                    changeButtonElement.textContent = 'Change';

                    //CONTAINER OF BUTTONS OF THE GAME
                    const divContainerButtonsElement = document.createElement('div');
                    divContainerButtonsElement.classList.add('buttons-container');

                    divContainerButtonsElement.appendChild(changeButtonElement);
                    divContainerButtonsElement.appendChild(deleteButtonElement);

                    //CREATE GAME DATA ELEMENTS
                    const typePElement = document.createElement('p');
                    typePElement.textContent = game.type;

                    const playersPElement = document.createElement('p');
                    playersPElement.textContent = game.players;

                    const nameOfGamePElement = document.createElement('p');
                    nameOfGamePElement.textContent = game.name;

                    //CONTAINER FOR GAME DATA
                    const divGameDataElement = document.createElement('div');
                    divGameDataElement.classList.add('content');

                    divGameDataElement.appendChild(nameOfGamePElement);
                    divGameDataElement.appendChild(playersPElement);
                    divGameDataElement.appendChild(typePElement);

                    //CONTAINER FOR WHOLE GAME
                    const divGameContainer = document.createElement('div');
                    divGameContainer.classList.add('board-game');
                    divGameContainer.appendChild(divGameDataElement);
                    divGameContainer.appendChild(divContainerButtonsElement);

                    gameListElement.appendChild(divGameContainer);

                    changeButtonElement.addEventListener('click', () => {
                        newGameName.value = nameOfGamePElement.textContent;
                        newGameType.value = typePElement.textContent;
                        newGameMaxPlayers.value = playersPElement.textContent;

                        //EDIT GAME BUTTON
                        const editGameButtonElement = document.getElementById('edit-game');
                        editGameButtonElement.removeAttribute('disabled');
                        addNewGameButtonElement.setAttribute('disabled', 'disabled');


                        editGameButtonElement.addEventListener('click', () => {
                            fetch(`${baseUrl}/${game._id}`, {
                                method: 'PUT',
                                header: {
                                    'content-type': 'application/json',
                                },
                                body: JSON.stringify({
                                    name: newGameName.value,
                                    type: newGameType.value,
                                    players: newGameMaxPlayers.value,
                                    _id: game._id,
                                })
                            })
                            newGameName.value = '';
                            newGameType.value = '';
                            newGameMaxPlayers.value = '';

                            editGameButtonElement.setAttribute('disabled', 'disabled');
                            addNewGameButtonElement.removeAttribute('disabled');
                            fetchAllGames();
                        })
                    })

                    deleteButtonElement.addEventListener('click', () => {
                        fetch(`${baseUrl}/${game._id}`, {
                            method: 'DELETE',
                        })
                        fetchAllGames();
                    })
                }

            });
    }

    loadGameButtonElement.addEventListener('click', () => {
        //FETCHING ALL GAMES
        fetchAllGames();
    })


    //ADD NEW GAME
    addNewGameButtonElement.addEventListener('click', () => {

        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                name: newGameName.value,
                type: newGameType.value,
                players: newGameMaxPlayers.value,
                _id: '',
            })
        });

        newGameName.value = '';
        newGameType.value = '';
        newGameMaxPlayers.value = '';
        fetchAllGames();
    })
};

solve();