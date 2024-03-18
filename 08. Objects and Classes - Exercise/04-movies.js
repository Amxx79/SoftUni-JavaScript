function solve(input) {
    let library = [];
    for (const row of input) {
        if (row.includes('addMovie')) {
            const currentMovie = {
                name: row.substring('addMovie'.length + 1),
            }
            library.push(currentMovie);
        } else if (row.includes('directedBy')) {
            const [movieName, director] = row.split(' directedBy ');
            const currentMovie = library.find(movie => movie.name === movieName);
            if (currentMovie) {
                currentMovie.director = director;
            }
        } else if (row.includes('onDate')) {
            const [movieName, date] = row.split(' onDate ');
            const currentMovie = library.find(movie => movie.name === movieName);
            if (currentMovie) {
                currentMovie.date = date;
            }
        }
    }

    library
    .filter(obj => obj.director && obj.date)
    .forEach(movie => console.log(JSON.stringify(movie)));
}

solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]);
    