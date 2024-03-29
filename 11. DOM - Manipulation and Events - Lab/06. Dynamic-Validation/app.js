function validate() {
    const emailEntered = document.getElementById('email');

    const regExp = /^[a-z]+@[a-z]+.[a-z]+/;
    emailEntered.addEventListener('change', (event) => {
        if (!regExp.test(event.target.value)) {
            emailEntered.classList.add('error')
        } else {
            emailEntered.classList.remove('error');
        }
    })
}