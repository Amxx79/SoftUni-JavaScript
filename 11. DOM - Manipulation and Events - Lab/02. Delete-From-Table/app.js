function deleteByEmail() {
    const allTrElements = document.querySelectorAll('table tbody tr');
    const searchedEmail = document.querySelector('label input');
    const result = document.getElementById('result');

    const trElement = Array.from(allTrElements)
        .find(element => element.children[1].textContent.includes(searchedEmail.value));
        if (trElement) {
            result.textContent = 'Removed';
            trElement.remove();
        } else {
            result.textContent = 'Not found.';
        }
}