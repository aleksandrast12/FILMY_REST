import Movie from "./Movie.js";
export default class MovieBase {
    static positiveWords = [
        "dobry",
        "fajny",
        "ladny",
        "ciekawy",
        "dobra",
        "fajna",
        "ladna",
        "ciekawa",
        "dobre",
        "fajne",
        "ladne",
    ];
    static negativeWords = [
        "brzydki",
        "okropny",
        "fatalny",
        "brzydka",
        "okropna",
        "fatalna",
        "brzydkie",
        "okropne",
        "fatalne",
    ];
    static base = new Map();
    static AddMovie(Movie) {
        MovieBase.base.set(Movie.id, Movie);
    }
    static get(id) {
        return MovieBase.base.get(id);
    }
    static reviewMovie(id, review) {
        let movie = MovieBase.get(id);

        if (!movie) return null;

        let words = review.toLowerCase().replaceAll("\n", " ").split(" ");

        let positive = 0;
        let negative = 0;

        for (let word of words) {
            if (MovieBase.positiveWords.includes(word)) {
                positive++;
            } else if (MovieBase.negativeWords.includes(word)) {
                negative++;
            }
        }

        if (positive > negative) {
            movie.recordPositiveSentimentReview();
            return "Positive";
        } else if (negative > positive) {
            movie.recordNegativeSentimentReview();
            return "Negative";
        }
        return "Neutral/unknown";
    }
}

MovieBase.AddMovie(new Movie("Avengers Endgame", "Russo brothers", "", ""));
MovieBase.AddMovie(new Movie("Thor Ragnarok", "Taika Watiti", "", ""));
MovieBase.AddMovie(new Movie("Iron Man", "John Favreau", "", ""));
MovieBase.AddMovie(new Movie("Avengers Infinity War", "Russo brothers", "", ""));
MovieBase.AddMovie(new Movie("Captain America Civil War", "Russo brothers", "", ""));
