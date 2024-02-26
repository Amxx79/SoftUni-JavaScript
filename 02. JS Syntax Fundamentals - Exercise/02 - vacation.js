function solve(peopleCount, typeOfGroup, dayOfWeek) {
    let eachPersonPrice;

    if (typeOfGroup === 'Students') {
        if (dayOfWeek === 'Friday') {
            eachPersonPrice = 8.45;
        } else if (dayOfWeek === 'Saturday') {
            eachPersonPrice = 9.80;
        } else if (dayOfWeek === 'Sunday') {
            eachPersonPrice = 10.46;
        }

    } else if (typeOfGroup === 'Business') {
        if (dayOfWeek === 'Friday') {
            eachPersonPrice = 10.90;
        } else if (dayOfWeek === 'Saturday') {
            eachPersonPrice = 15.60;
        } else if (dayOfWeek === 'Sunday') {
            eachPersonPrice = 16;
        }
    } else if (typeOfGroup === 'Regular') {
        if (dayOfWeek === 'Friday') {
            eachPersonPrice = 15;
        } else if (dayOfWeek === 'Saturday') {
            eachPersonPrice = 20;
        } else if (dayOfWeek === 'Sunday') {
            eachPersonPrice = 22.50;
        }
    }

    let totalPrice = eachPersonPrice * peopleCount;

    if (typeOfGroup === 'Students' && peopleCount >= 30) {
        totalPrice *= 0.85;
    } if (typeOfGroup === 'Business' && peopleCount >= 100) {
        totalPrice -= eachPersonPrice * 10;
    } if (typeOfGroup === 'Regular' && peopleCount >= 10 && peopleCount <= 20) {
        totalPrice *= 0.95;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve(30,
    "Students",
    "Sunday"
);
solve(40,
    "Regular",
    "Saturday"
    );
