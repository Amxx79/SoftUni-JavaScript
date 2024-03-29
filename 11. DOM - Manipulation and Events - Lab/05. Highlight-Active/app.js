function focused() {
    const allDivs = document.querySelectorAll('body div input');
    const divs = Array.from(allDivs).forEach(inputEl => inputEl.addEventListener('focus', () => {
        inputEl.parentElement.classList.add('focused');
        inputEl.addEventListener('blur', () => {
            inputEl.parentElement.classList.remove('focused');
        })
    }))

    console.log(allDivs);
}