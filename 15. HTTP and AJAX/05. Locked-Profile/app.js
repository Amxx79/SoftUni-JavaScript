function lockedProfile() {
    const baseUrl = 'http://localhost:3030/jsonstore/advanced/profiles';
    const main = document.querySelector('main');

    fetch(baseUrl)
        .then(data => data.json())
        .then(data => {

            for (const account in data) {
                const holderDivElement = document.createElement('div');
                holderDivElement.classList.add('profile');

                const imageOfProfile = document.createElement('img');
                imageOfProfile.src = './iconProfile2.png';
                imageOfProfile.classList.add('userIcon');
                holderDivElement.appendChild(imageOfProfile);

                const newLine = document.createElement('br');

                //--Lock Radio Button
                const labelLock = document.createElement('label');
                labelLock.textContent = 'Lock';
                const inputRadioButton = document.createElement('input');
                inputRadioButton.setAttribute('type', 'radio');
                inputRadioButton.setAttribute('value', 'lock');
                inputRadioButton.setAttribute("checked", "true");
                inputRadioButton.setAttribute('name', 'profile');
                holderDivElement.appendChild(labelLock);
                holderDivElement.appendChild(inputRadioButton);
                holderDivElement.appendChild(newLine);

                //--Unlock Radio Button
                const labelUnlock = document.createElement('label');
                labelUnlock.textContent = 'Unlock';
                const inputUnlockRadioButton = document.createElement('input');
                inputUnlockRadioButton.setAttribute('type', 'radio');
                inputUnlockRadioButton.setAttribute('value', 'unlock');
                inputUnlockRadioButton.setAttribute('name', 'profile');
                inputUnlockRadioButton.appendChild(newLine);
                holderDivElement.appendChild(labelUnlock);
                holderDivElement.appendChild(inputUnlockRadioButton);

                //--Horizontal Line--
                const hr = document.createElement('hr');
                holderDivElement.appendChild(hr);

                //--Username Fill
                const labelUsername = document.createElement('label');
                labelUsername.textContent = 'Username';
                const inputUsername = document.createElement('input');
                inputUsername.setAttribute('type', 'text');
                inputUsername.setAttribute('name', data[account].username);
                inputUsername.setAttribute('disabled', 'disabled');
                inputUsername.value = data[account].username;

                holderDivElement.appendChild(labelUsername);
                holderDivElement.appendChild(inputUsername);

                //--Div Other Data
                const divAnotherData = document.createElement('div');
                divAnotherData.classList.add('user1Username');

                //--EMAIL--
                const newHr = document.createElement('hr');
                const labelEmail = document.createElement('label');
                labelEmail.textContent = 'Email:';
                const inputEmailAccount = document.createElement('input');
                inputEmailAccount.setAttribute('type', 'email');
                inputEmailAccount.setAttribute('disabled', 'disabled')
                inputEmailAccount.value = data[account].email;
                console.log(inputEmailAccount.value);
                divAnotherData.appendChild(labelEmail);
                divAnotherData.appendChild(inputEmailAccount);

                //--AGE--
                const labelAge = document.createElement('label');
                labelAge.textContent = 'Age:';
                const inputAge = document.createElement('input');
                inputAge.setAttribute('type', 'text');
                inputAge.setAttribute('disabled', 'disabled')
                inputAge.value = data[account].age;
                console.log(inputAge.value);
                divAnotherData.appendChild(labelAge);
                divAnotherData.appendChild(inputAge);


                //--Show More Button
                const showMoreButtonElement = document.createElement('button');
                showMoreButtonElement.textContent = 'Show more';
                holderDivElement.appendChild(showMoreButtonElement);

                showMoreButtonElement.addEventListener('click', () => {
                    if (inputUnlockRadioButton.checked) {
                        if (showMoreButtonElement.textContent === 'Show more') {
                            showMoreButtonElement.remove();
                            holderDivElement.appendChild(newHr);
                            holderDivElement.appendChild(labelEmail);
                            holderDivElement.appendChild(inputEmailAccount);
                            holderDivElement.appendChild(divAnotherData);
                            holderDivElement.appendChild(showMoreButtonElement);
                            showMoreButtonElement.textContent = 'Hide it';

                        } else if (showMoreButtonElement.textContent === 'Hide it') {
                            showMoreButtonElement.textContent = 'Show more';
                            labelEmail.remove();
                            inputEmailAccount.remove();
                            divAnotherData.remove();
                            labelEmail.remove();
                        }
                    }
                })



                main.appendChild(holderDivElement);

            }
        })

}