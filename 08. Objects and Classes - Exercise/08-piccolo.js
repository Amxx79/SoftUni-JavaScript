function solve(input) {
    let parkingLot = {};
    
    for (const carAction of input) {
        let [action, plate] = carAction.split(', ');
        if (action === 'IN') {
            parkingLot[plate] = true;
        } else {
            delete parkingLot[plate];
        }

        // action === 'IN' 
        // ? parkingLot[plate] = true
        // : delete parkingLot[plate]
    }

    Object.keys(parkingLot)
        .sort((a, b) => a.localeCompare(b))
        .forEach(carNumber => console.log(carNumber));
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);