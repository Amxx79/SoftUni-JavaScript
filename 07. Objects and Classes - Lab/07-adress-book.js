function solve(input) {
    let adressBook = {};

    for (const guy of input) {
        let [name, adress] = guy.split(':');
        adressBook[name] = adress;
    }
    Object.entries(adressBook)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([name, adress]) => console.log(`${name} -> ${adress}`));
}

solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
);