function attachEventsListeners() {
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    const daysBtn = document.getElementById('daysBtn');
    const hoursBtn = document.getElementById('hoursBtn');
    const minutesBtn = document.getElementById('minutesBtn');
    const secondBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', () => {
        const text = daysBtn.previousElementSibling.value;
        console.log(days.value);

        const hoursConvert = 24 * text;
        const minutesConvert = text * 1440;
        const secondConvert = text * 86400;

        hours.value = hoursConvert;
        minutes.value = minutesConvert;
        seconds.value = secondConvert;
    })

    hoursBtn.addEventListener('click', () => {
        const text = hoursBtn.previousElementSibling.value;

        const daysConvert = text / 24;
        const minutesConvert = text * 60;
        const secondConvert = text * 60 * 60;

        days.value = daysConvert;
        minutes.value = minutesConvert;
        seconds.value = secondConvert;
    })

    minutesBtn.addEventListener('click', () => {
        const text = minutesBtn.previousElementSibling.value;

        const daysConvert = text / 1440;
        const secondConvert = text * 60;
        const hoursConvert = text / 60;

        days.value = daysConvert;
        seconds.value = secondConvert;
        hours.value = hoursConvert;
    })

    secondBtn.addEventListener('click', () => {
        const text = secondBtn.previousElementSibling.value;

        const daysConvert = text / 86400;
        const hoursConvert = text / 3600;
        const minutesConvert = text / 60;

        days.value = daysConvert;
        hours.value = hoursConvert;
        minutes.value = minutesConvert;
    })
}