/**
 *  Function Component
 */

// function Book(title, author, ISBN, numCopies) {
//   this.title = title;
//   this.author = author;
//   this.ISBN = ISBN;
//   this.numCopies = numCopies;
// }

// Book.prototype.getAvailability = function () {
//   if (this.numCopies === 0) {
//     return "Out of stock";
//   } else if (this.numCopies < 10) {
//     return " Low inventory";
//   } else {
//     return "In stock";
//   }
// };

// Book.prototype.sell = function (numCopiesSold = 1) {
//   this.numCopies -= numCopiesSold;
// };

// Book.prototype.reStock = function (numCopiesStock = 5) {
//   this.numCopies += numCopiesStock;
// };

/**
 * Class Component
 */

class Book {
  constructor(title, author, ISBN, numCopies) {
    (this.title = title),
      (this.author = author),
      (this.ISBN = ISBN),
      (this.numCopies = numCopies);
  }

  get availability() {
    return this.getAvailability();
  }

  getAvailability() {
    if (this.numCopies === 0) {
      return "Out of Stock";
    } else if (this.numCopies < 10) {
      return "Low Stock";
    }
    return "In stock";
  }
  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }
  reStock(numCopiesStock = 5) {
    this.numCopies += numCopiesStock;
  }
}
const HungerGames = new Book("Hunger Games", "Suzanne Collins", 123919, 5);
console.log(HungerGames.getAvailability());
HungerGames.reStock(12);
console.log(HungerGames.getAvailability());
HungerGames.sell(17);
console.log(HungerGames.getAvailability());
