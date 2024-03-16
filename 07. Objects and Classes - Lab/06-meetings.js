function solve(input) {
    let days = {};

    for (const meeting of input) {
        const [day, guy] = meeting.split(' ');
        if (days[day] === undefined) {
            days[day] = guy;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    for (const key in days) {
        console.log(`${key} -> ${days[key]}`);
    }
}

solve(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
);