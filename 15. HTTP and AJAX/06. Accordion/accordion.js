function solution() {
    const baseUrl = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const main = document.getElementById('main');

    fetch(baseUrl)
        .then(data => data.json())
        .then(parsedData => {

            for (const object in parsedData) {
                const divHolder = document.createElement('div');
                divHolder.classList.add('accordion');


                const divHead = document.createElement('div');
                divHead.classList.add('head');

                const span = document.createElement('span');
                span.textContent = parsedData[object].title;
                const button = document.createElement('button');
                button.classList.add('button');
                button.id = parsedData[object]._id;
                button.textContent = 'MORE';

                button.addEventListener('click', () => {
                    fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${button.id}`)
                        .then(data => data.json())
                        .then(parseData => {
                            if (button.textContent == 'MORE') {
                                    extraDiv = document.createElement('div');
                                    extraDiv.classList.add('extra');
                                    const paragraph = document.createElement('p');
                                    paragraph.textContent = parseData.content;
                                    extraDiv.appendChild(paragraph);
                                    divHolder.appendChild(extraDiv);
                                button.textContent = 'LESS';
                                extraDiv.style.display = 'block';
                            } else if (button.textContent == 'LESS') {
                                const hideExtraDiv = document.querySelector('#main .accordion .extra');
                                hideExtraDiv.style.display = 'none';
                                button.textContent = 'MORE';
                                hideExtraDiv.remove();
                            }

                        });
                })

                divHead.appendChild(span);
                divHead.appendChild(button);

                divHolder.appendChild(divHead);
                main.appendChild(divHolder);


                console.log(parsedData[object].title);
            }
        });

    //     <div class="extra">
    //         <p>Scalable Vector Graphics .....</p>
    //     </div>
}

solution();