function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        const textArea = document.querySelector('#inputs textarea');
        const bestRestaurant = document.querySelector('#bestRestaurant p');
        const workers = document.querySelector('#workers p');
        const activeTextState = JSON.parse(textArea.value);
        const restaurants = [];
        let objects = {};

        for (const rest of activeTextState) {
            const currentRestaurant = rest.split(' - ');
            const restaurantName = currentRestaurant[0];
            const workersData = currentRestaurant[1].split(', ').map(worker => {
                const [name, salary] = worker.split(' ');
                return { name: name, salary: Number(salary) };
            });
            objects[restaurantName] = workersData;
        }


        let bestSalary = 0;
        let salarySum = 0;
        let averageSalary = {};
        let arrayRestaurants = [];
        for (const restaurant in objects) {
            for (const worker of objects[restaurant]) {
                if (worker.salary > bestSalary) {
                    bestSalary = worker.salary;
                }
                salarySum += Number(worker.salary);
            }
            averageSalary[restaurant] = Number(salarySum / Number(objects[restaurant].length)).toFixed(2);
            let averageSalaryCurrent = Number(salarySum / Number(objects[restaurant].length)).toFixed(2);
    
            salarySum = 0;
            let newRestaurant = {
                nameR: restaurant,
                bestS: bestSalary,
                avgSalary: averageSalaryCurrent
            }
            arrayRestaurants.push(newRestaurant);
        }
        for (let i = 0; i < arrayRestaurants.length; i++) {
            if (arrayRestaurants[i].bestS > arrayRestaurants[i + 1].bestS) {
                bestRestaurant.textContent = `Name: ${arrayRestaurants[i].nameR}
                Average Salary: ${arrayRestaurants[i].avgSalary} Best Salary ${arrayRestaurants[i].bestS.toFixed(2)}`
                workers.textContent = objects[arrayRestaurants[i].nameR].forEach(element => {
                    `Name: ${element.name} With Salary: ${element.salary}`;
                });
                break;
            } else {
                bestRestaurant.textContent = `Name: ${arrayRestaurants[i + 1].nameR}
                Average Salary: ${arrayRestaurants[i + 1].avgSalary} Best Salary ${arrayRestaurants[i + 1].bestS.toFixed(2)}`
                let stringify = '';
                let workersArray = objects[arrayRestaurants[i + 1].nameR]
                .map(element => {
                    stringify += `Name: ${element.name} With Salary: ${element.salary} `;
                });
                workers.textContent = stringify;
                break;
            }
        }

    };
}