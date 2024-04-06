function solve() {
    const baseUrl = `http://localhost:3030/jsonstore/bus/schedule`;
    const idInfo = document.getElementById('info');
    const departButton = document.getElementById('depart');
    const arriveButton = document.getElementById('arrive');

    function depart() {

        departButton.addEventListener('click', () => {
            arriveButton.removeAttribute("disabled");
            departButton.setAttribute("disabled", "disabled");

            fetch(`${baseUrl}`)
                .then(url => url.json())
                .then(data => {
                    let reversedData = [];

                    for (const stop in data) {
                        reversedData.unshift(stop);
                    }

                    idInfo.textContent = `Next stop ${reversedData.shift()}`;

                })
                .catch(() => console.log('something went wrong'));

        })
    }

    async function arrive() {
        arriveButton.addEventListener('click', () => {
            fetch(`${baseUrl}`)
                .then(url => url.json())
                .then(data => {
                    let reversedData = [];

                    for (const stop in data) {
                        reversedData.unshift(stop);
                    }

                    const stopName = reversedData.shift();
                    idInfo.textContent = `Arriving at ${stopName}`;
                    departButton.removeAttribute("disabled");
                    arriveButton.setAttribute("disabled", "disabled");

                    fetch(`${baseUrl}/${stopName}`, {
                        method: 'DELETE'
                    });

                })
                .catch(() => console.log('something went wrong'));

        })
    }

    return {
        depart,
        arrive
    };
}

let result = solve();