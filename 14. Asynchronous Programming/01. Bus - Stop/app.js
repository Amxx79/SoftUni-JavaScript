function getInfo() {
    // TODO:
    const baseUrl = `http://localhost:3030/jsonstore/bus/businfo`;
    const stopId = document.getElementById('stopId');
    const confirmButton = document.getElementById('submit');
    const stopName = document.querySelector('#result #stopName');
    const busses = document.getElementById('buses');

    confirmButton.addEventListener('click', () => {

        fetch(`${baseUrl}/${stopId.value}`)
            .then(res => res.json())
            .then(data => {
                stopName.textContent = data.name;

                for (const bus in data.buses) {
                    const liElement = document.createElement('li');
                    liElement.textContent = `Bus ${bus} arrives in ${data.buses[bus]} minutes`;

                    busses.appendChild(liElement);
                }
            })
            .catch(() => stopName.textContent = 'Error');
    })


}