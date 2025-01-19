//L2-LibrarySystemwithMultiple.js
class Library {
    constructor() {
        this.books = []; 
    }

    addBook(book) {
        this.books.push(book);
        console.log(`"${book}" has been added.`);
        this.displayBooks();
    }

    removeBook(book) {
        const index = this.books.indexOf(book);
        if (index !== -1) {
            this.books.splice(index, 1);
            console.log(`"${book}" has been removed.`);
        } else {
            console.log(`"${book}" is not in the library.`);
        }
        this.displayBooks();
    }

    searchBook(book) {
        const found = this.books.includes(book);
        console.log(found ? `"${book}" is available in the library.` : `"${book}" is not in the library.`);
    }

    findOccurrences(book) {
        const firstIndex = this.books.indexOf(book);
        const lastIndex = this.books.lastIndexOf(book);
        if (firstIndex === -1) {
            console.log(`"${book}" is not in the library.`);
        } else {
            console.log(`"${book}" first occurs at index ${firstIndex} and last occurs at index ${lastIndex}.`);
        }
    }

    extractSublist(start, end) {
        const sublist = this.books.slice(start, end);
        console.log(`Extracted sublist of books:`, sublist);
    }

    sortBooks() {
        this.books.sort((a, b) => a.localeCompare(b));
        console.log("Books sorted alphabetically:");
        this.displayBooks();
    }

    replaceBook(index, newBook) {
        if (index >= 0 && index < this.books.length) {
            const replacedBook = this.books.splice(index, 1, newBook)[0];
            console.log(`"${replacedBook}" has been replaced with "${newBook}".`);
        } else {
            console.log("Invalid index.");
        }
        this.displayBooks();
    }

    joinBooks() {
        const joinedBooks = this.books.join(", ");
        console.log("All books in the library:", joinedBooks);
    }

    displayBooks() {
        console.log("Current list of books:", this.books.length ? this.books : "No books in the library.");
    }
}

const myLibrary = new Library();

myLibrary.addBook("Shriman Yogi"); 
myLibrary.addBook("Chhava"); 
myLibrary.addBook("Rau"); 
myLibrary.addBook("Panipat"); 
myLibrary.addBook("Mrutyunjay"); 
myLibrary.removeBook("Chhava");

myLibrary.searchBook("Shriman Yogi");
myLibrary.searchBook("Panipat");

myLibrary.findOccurrences("Rau");

myLibrary.extractSublist(1, 3);

myLibrary.sortBooks();

myLibrary.replaceBook(2, "Moghul: The Legend of Bahadur Shah by Manoshi Sinha Rawal");

myLibrary.joinBooks();
