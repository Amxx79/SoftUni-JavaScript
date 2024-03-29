function solve(grade) {
    let readyAnswer = getGrade(grade);


    function getGrade(grade) {
        if (grade < 3) {
            return `Fail (2)`
        } else if (grade < 3.50) {
            return `Poor (${grade.toFixed(2)})`;
        } else if (grade < 4.50) {
            return `Good (${grade.toFixed(2)})`;
        } else if (grade < 5.50) {
            return `Very good (${grade.toFixed(2)})`;
        } else {
            return `Excellent (${grade.toFixed(2)})`;
        }
    }

    console.log(readyAnswer);
}

solve(2.99);