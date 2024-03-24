function toggle() {
    const button = document.querySelector('.head .button');
    const additionalText = document.getElementById('extra');
    
    if (button.textContent === 'More') {
        additionalText.style.display = 'block';
        button.textContent = 'Less';
    } else if (button.textContent === 'Less') {
        additionalText.style.display = 'none';
        button.textContent = 'More';
    }
}