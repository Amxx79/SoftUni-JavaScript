function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    const result = document.getElementById('result');
    

    gradient.addEventListener('mousemove', (event) => {
        const percentage = event.offsetX;
        result.textContent = `${Math.floor(percentage / 3)}%`;
    })
}