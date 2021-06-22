class Book {
    constructor(title, author, ISBN, numCopies) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    }

    // Getter
    get availability(){
        return this.getAvailability();
    }

    // Method
    getAvailability() {
        if(this.numCopies === 0) {
            return 'Out of stock';
        } else if (this.numCopies < 10) {
            return "Low stock";
        }
        return "In Stock";
    }

    sell(numCopiesSold = 1) {
        this.numCopies -= numCopiesSold;
    }

    reStock(numCopiesReStocked = 5){
        this.numCopies += numCopiesReStocked;
    }
}

// Technical inheritance
class TechnicalBook extends Book{
    constructor(title, author, ISBN, numCopies, edition){
        super(title, author, ISBN, numCopies);
        this.edition = edition;
    }

    getEdition(){
        return `The current version of this book is ${this.edition}.`;
    }
}

const CrackingTheCodingInterview = new TechnicalBook(
    "Cracking The Coding Interview",
    "Gayle Laackmann Mcdowell",
    1209123,
    7,
    "2.3"
);

console.log(CrackingTheCodingInterview.availability);
console.log(CrackingTheCodingInterview.getEdition());
CrackingTheCodingInterview.reStock(6);
console.log(CrackingTheCodingInterview.availability);