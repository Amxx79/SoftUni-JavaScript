function solve(object) {
    const city = {
        name: object.name,
        area: object.area,
        population: object.population,
        country: object.country,
        postCode: object.postCode,
    }
    for (const key in city) {
        if (Object.hasOwnProperty.call(city, key)) {
            console.log(`${key} -> ${city[key]}`);;
        }
    }
}

    solve({
        name: "Sofia",
        area: 492,
        population: 1238438,
        country: "Bulgaria",
        postCode: "1000"
    }
    );