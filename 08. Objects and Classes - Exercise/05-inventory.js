function solve(input) {
    let heroes = [];

    for (const hero of input) {
        let [name, level, powerThings] = hero.split(' / ');
        let newHero = {
            hero: name,
            level: level,
            items: powerThings,
        }
        heroes.push(newHero);
    }
    for (const hero of heroes.sort((a, b) => (a.level - b.level))) {
        console.log(`Hero: ${hero.hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
);