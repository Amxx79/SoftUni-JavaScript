function solve(input) {
    let phrase = input.shift();

    let command = input.shift();

    while(command !== 'Buy') {
        let [name, substring, replacament] = command.split('?');
        switch(name) {
            
            case 'TakeEven':
                phrase = phrase.split('').filter((_,i) => i % 2 == 0).join('');
                console.log(phrase);
            break;

            case 'ChangeAll':
                while (phrase.includes(substring)) {
                    phrase = phrase.replace(substring, replacament);
                }
                console.log(phrase);
            break;

            case 'Reverse':
                if (phrase.includes(substring)) {
                    phrase = phrase.replace(substring, '');
                    substring = substring.split('').reverse().join('');
                    phrase += substring;
                    console.log(phrase);
                } else {
                    console.log('error');
                }
            break;

        }
        command = input.shift();
    }

    console.log(`The cryptocurrency is: ${phrase}`);
}

solve((["PZDfA2PkAsakhnefZ7aZ", 
"TakeEven",
"TakeEven",
"TakeEven",
"ChangeAll?Z?X",
"ChangeAll?A?R",
"Reverse?PRX",
"Buy"])
);