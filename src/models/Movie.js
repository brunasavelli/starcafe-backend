const { v4: uuid4 } = require("uuid");

class Movie {
    constructor(title, director, year, genre, rating, onDisplay) {
        this.id = uuid4();
        this.title = title;
        this.director = director;
        this.year = year;
        this.genre = genre;
        this.rating = rating;
        this.onDisplay = onDisplay;
    }
}

module.exports = Movie;