function solve(input) {

    const baristaCount = input.shift();
    let baristaTeam = {};

    for (let i = 0; i < baristaCount; i++) {
        let currentBarista = input[0];
        let [name, shiftType, beverageKnows] = currentBarista.split(' ');

        baristaTeam[name] = {
            shift: shiftType,
            beverage: beverageKnows.split(','),
        };
        input.shift();
    }

    let command = input.shift();

    while (command !== 'Closed') {
        let commandArr = command.split(' / ');

        if (commandArr[0] === 'Prepare') {
            let currentBarista = baristaTeam[commandArr[1]];

            if (currentBarista.shift === commandArr[2] && currentBarista.beverage.includes(commandArr[3])) {
                console.log(`${commandArr[1]} has prepared a ${commandArr[3]} for you!`);
            } else {
                console.log(`${commandArr[1]} is not available to prepare a ${commandArr[3]}.`);
            }
        } else if (commandArr[0] === 'Change Shift') {
            let currentBarista = baristaTeam[commandArr[1]];
            let wantedShift = commandArr[2];

            if (currentBarista.shift !== wantedShift) {
                currentBarista.shift = wantedShift;
            }
            console.log(`${commandArr[1]} has updated his shift to: ${wantedShift}`);
        } else if (commandArr[0] === 'Learn') {
            let currentBarista = baristaTeam[commandArr[1]];
            let newCoffee = commandArr[2];
            if (currentBarista.beverage.includes(newCoffee)) {
                console.log(`${commandArr[1]} knows how to make ${commandArr[2]}.`);
            } else {
                currentBarista.beverage.push(commandArr[2]);
                console.log(`${commandArr[1]} has learned a new coffee type: ${commandArr[2]}.`);
            }
        }
        command = input.shift();
    }

    for (const barista in baristaTeam) {
        console.log(`Barista: ${barista}, Shift: ${baristaTeam[barista].shift}, Drinks: ${baristaTeam[barista].beverage.join(', ')}`);
    }
}

solve(['4',
'Alice day Espresso,Cappuccino',
'Bob night Latte,Mocha',
'Carol day Americano,Mocha',
'David night Espresso',
'Prepare / Alice / day / Espresso',
'Change Shift / Bob / day',
'Learn / Carol / Latte',
'Prepare / Bob / night / Latte',
'Learn / David / Cappuccino',
'Prepare / Carol / day / Cappuccino',
'Change Shift / Alice / night',
 'Learn / Bob / Mocha',
'Prepare / David / night / Espresso',
'Closed']
);