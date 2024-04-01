function lockedProfile() {
    const allProfiles = document.querySelectorAll('.profile');
    
    for (const profile of allProfiles) {
        const button = profile.querySelector('button');
        const radioButton = profile.querySelector('input[type=radio][value=lock]');
        button.addEventListener('click', () => {
            const additionalInfo = profile.querySelector('div');

            if (!radioButton.checked) {

            additionalInfo.style.display = additionalInfo.style.display === 'block' 
            ? 'none' 
            : 'block';
            button.textContent = button.textContent  === 'Show more' 
            ? 'Hide it' 
           : 'Show more';
        }
        })
    }
}