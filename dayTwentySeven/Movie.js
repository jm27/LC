/**
 * Functional component
 */

// function Movie(title, director, genre, releaseYear, rating) {
//   this.title = title;
//   this.director = director;
//   this.genre = genre;
//   this.releaseYear = releaseYear;
//   this.rating = rating;
// }

// Movie.prototype.getOverview = function () {
//   return `${this.title}, a ${this.genre} film directed by ${this.director} was released
//     in ${this.releaseYear}. It received a rating of ${this.rating}`;
// };

/**
 * Class Component
 */

class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }

  get overview() {
      return this.getOverview()
  }

  getOverview() {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released
      in ${this.releaseYear}. It received a rating of ${this.rating}`;
  }
}

const newMovie = new Movie(
  "Matrix",
  "the Washowksi brothers",
  "fiction",
  2001,
  8.8
);
console.log(newMovie.getOverview());
