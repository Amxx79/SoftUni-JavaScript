let price;

function solve(dayofWeek, age) {
    if (age < 0 || age > 1000) {
        price = 'Error!';
        console.log('Error!');
        return;
    }
    if (dayofWeek == 'Weekday') {
        if (age > 0 && age <= 18) {
            price = 12;
        }
        else if (age > 18 && age <= 64) {
            price = 18;
        }
        else if (age > 64 && age <= 122) {
            price = 12;
        }
    }
    else if (dayofWeek == 'Weekend') {
        if (age > 0 && age <= 18) {
            price = 15;
        }
        else if (age > 18 && age <= 64) {
            price = 20;
        }
        else if (age > 64 && age <= 122) {
            price = 15;
        }
    }
    else if (dayofWeek == 'Holiday') {
        if (age > 0 && age <= 18) {
            price = 5;
        }
        else if (age > 18 && age <= 64) {
            price = 12;
        }
        else if (age > 64 && age <= 122) {
            price = 10;
        }
    }
    console.log(price + '$');
}

solve('Weekday', 42);
solve('Holiday', -12);
solve('Holiday', 15);   
