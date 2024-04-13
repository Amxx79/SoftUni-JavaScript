function solve(input) {
    let numberOfCommands = input.shift();
    let heroes = {};

    for (let i = 0; i < numberOfCommands; i++) {
        let [name, hp, bullets] = input.shift().split(' ');
        heroes[name] = {
            hp,
            bullets,
        };

    }

    let [action, hero, target, attacker] = input.shift().split(' - ');

    while (action !== 'Ride Off Into Sunset') {

        if (action === 'FireShot') {
            if (heroes[hero].bullets > 0) {
                heroes[hero].bullets -= 1;
                console.log(`${hero} has successfully hit ${target} and now has ${heroes[hero].bullets} bullets!`);
            } else {
                console.log(`${hero} doesn't have enough bullets to shoot at ${target}!`);
            }

        } else if (action === 'TakeHit') {
            //targeet is damage
            heroes[hero].hp -= target;

            if (heroes[hero].hp > 0) {
                console.log(`${hero} took a hit for ${target} HP from ${attacker} and now has ${heroes[hero].hp} HP!`);
            } else {
                console.log(`${hero} was gunned down by ${attacker}!`);
            }

        } else if (action === 'Reload') {
            if (heroes[hero].bullets < 6) {
                let howManyBulletsIHave = heroes[hero].bullets;
                heroes[hero].bullets = 6;
                console.log(`${hero} reloaded ${6 - howManyBulletsIHave} bullets!`);
            } else {
                console.log(`${hero}'s pistol is fully loaded!`);
            }
        } else if (action === 'PatchUp') {
            if (heroes[hero].hp < 100) {
                let howManyHpIHave = heroes[hero].hp;
                heroes[hero].hp += Number(target);
                console.log(`${hero} patched up and recovered ${target} HP!`);
            } else {
                console.log(`${hero} is in full health!`);
            }
        }

        [action, hero, target, attacker] = input.shift().split(' - ');
    }

    for (const hero in heroes) {
        if (heroes[hero].hp > 0) {
            console.log(hero);
            console.log(` HP: ${heroes[hero].hp}`);
            console.log(` Bullets: ${heroes[hero].bullets}`);
        }
    }


}

solve((["2",
"Gus 100 0",
"Walt 100 6",
"TakeHit - Gus - 80 - Bandit",
 "PatchUp - Gus - 20",
 "Ride Off Into Sunset"
])
);
