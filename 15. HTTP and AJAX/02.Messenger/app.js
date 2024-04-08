function attachEvents() {
    const baseUrl = `http://localhost:3030/jsonstore/messenger`;
    const textArea = document.getElementById('messages');

    const refreshButtonElement = document.getElementById('refresh');

    const submitButtonElement = document.getElementById('submit');
    const nameOfNewMessageElement = document.querySelector('input[type=text][name=author]');
    const contentOfNewMessageElement = document.querySelector('input[type=text][name=content]');


    refreshButtonElement.addEventListener('click', () => {
        textArea.textContent = '';
        let text = [];

        fetch(baseUrl)
            .then(data => data.json())
            .then(data => {
                for (const message of Object.values(data)) {
                    // textArea.textContent;
                    text.push(`${message.author}: ${message.content}`);
                    textArea.textContent = text.join('\n');
                }
            });
    })

    submitButtonElement.addEventListener('click', () => {
        console.log(nameOfNewMessageElement.value);
        console.log(contentOfNewMessageElement.value);

        fetch(baseUrl, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                author: nameOfNewMessageElement.value,
                content: contentOfNewMessageElement.value,
            })
        })
    })
}

attachEvents();