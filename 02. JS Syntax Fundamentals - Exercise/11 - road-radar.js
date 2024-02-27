function solve(currentSpeed, roadType) {
    let speedLimit = 0;
    let status = '';

    if (roadType === 'motorway') {
        speedLimit = 130;

        if (currentSpeed > speedLimit) {
            if (currentSpeed - speedLimit <= 20) {
                status = 'speeding';
            } else if (currentSpeed - speedLimit <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${currentSpeed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
        } else {
            console.log(`Driving ${currentSpeed} km/h in a ${speedLimit} zone`);
        }
    } else if (roadType === 'interstate') {
        speedLimit = 90;
        if (currentSpeed > speedLimit) {
            if (currentSpeed - speedLimit <= 20) {
                status = 'speeding';
            } else if (currentSpeed - speedLimit <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${currentSpeed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
        } else {
            console.log(`Driving ${currentSpeed} km/h in a ${speedLimit} zone`);
        }
    } else if (roadType === 'city') {
        speedLimit = 50;
        if (currentSpeed > speedLimit) {
            if (currentSpeed - speedLimit <= 20) {
                status = 'speeding';
            } else if (currentSpeed - speedLimit <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${currentSpeed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
        } else {
            console.log(`Driving ${currentSpeed} km/h in a ${speedLimit} zone`);
        }
    } else if (roadType === 'residential') {
        speedLimit = 20;
        if (currentSpeed > speedLimit) {
            if (currentSpeed - speedLimit <= 20) {
                status = 'speeding';
            } else if (currentSpeed - speedLimit <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${currentSpeed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
        } else {
            console.log(`Driving ${currentSpeed} km/h in a ${speedLimit} zone`);
        }
    }
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');