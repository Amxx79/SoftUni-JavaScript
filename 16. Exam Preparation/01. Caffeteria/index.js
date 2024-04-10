function solve(input) {

    const baristaCount = input.shift();
    let baristaTeam = {};

    for (let i = 0; i < baristaCount; i++) {
        let currentBarista = input[0];
        let [name, shiftType, beverage] = currentBarista.split(' ');

        baristaTeam[name] = {
            shift: shiftType,
            beverage: []
        }
        baristaTeam[name].beverage.push(beverage);
        input.shift();
    }

    let command = input.shift();

    while (command !== 'Closed') {
        let commandArr = command.split(' / ');

        if (commandArr[0] === 'Prepare') {
            let currentBarista = baristaTeam[commandArr[1]];

            if (currentBarista.shift === commandArr[2]) {
                console.log(`${commandArr[1]} has prepared a ${commandArr[3]} for you!`);
            } else {
                console.log(`${commandArr[1]} is not available to prepare a ${commandArr[3]}.`);
            }
        } else if (commandArr[0] === 'Change Shift') {
            let currentBarista = baristaTeam[commandArr[1]];
            if (currentBarista.shift === 'day') {
                currentBarista.shift = 'night'
                console.log(`${commandArr[1]} has updated his shift to: {new shift}`);
            } else {
                currentBarista.shift = 'day';
                console.log(`${commandArr[1]} has updated his shift to: {new shift}`);
            }
        }

        command = input.shift();
    }
}

solve([
    '3',
      'Alice day Espresso,Cappuccino',
      'Bob night Latte,Mocha',
      'Carol day Americano,Mocha',
      'Prepare / Alice / day / Espresso',
      'Change Shift / Bob / night',
      'Learn / Carol / Latte',
      'Learn / Bob / Latte',
      'Prepare / Bob / night / Latte',
      'Closed']
    );