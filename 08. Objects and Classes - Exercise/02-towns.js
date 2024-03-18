function solve(input) {
    let cities = [];

    for (const city of input) {
        const [town, latitude, longtitude] = city.split(' | ')
        let currentCity = {
            town: town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longtitude).toFixed(2),
        }
        cities.push(currentCity);
    }
    for (const city of cities) {
        console.log(city);
    }
}

solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);