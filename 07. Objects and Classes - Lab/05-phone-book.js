function solve(phoneBookArray) {
    let phoneBook = {};

    for (const contact of phoneBookArray) {
        const [name, number] = contact.split(' ');
        phoneBook[name] = number;
    }

    for (const contact in phoneBook) {
        console.log(`${contact} -> ${phoneBook[contact]}`);
    }
}

solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
);