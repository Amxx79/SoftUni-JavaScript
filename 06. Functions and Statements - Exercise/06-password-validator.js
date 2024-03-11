function solve(password) {
    const lengthValidation = password => password.length >= 6 && password.length <= 10;
    const onlyLowerAndCapitalCase = password => /^[A-Za-z0-9]+$/.test(password);
    const hasTwoSymbols = password => password
    .split('')
    .filter(char => Number.isInteger(Number(char)))
    .length >= 2;
    
    let isValid = true;

    if (!lengthValidation(password)) {
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    } if (!onlyLowerAndCapitalCase(password)) {
        console.log("Password must consist only of letters and digits");
        isValid = false;
    } if (!hasTwoSymbols(password)) {
        console.log("Password must have at least 2 digits");
        isValid = false;
    }

    if (isValid) {
        console.log('Password is valid');
    }
}

solve('logIn');
solve('MyPass123');
solve('Pa$s$s');