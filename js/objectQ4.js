// Array of objects representing books
const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publicationYear: 1960,
        genre: "Fiction",
        pages: 281
    },
    {
        title: "1984",
        author: "George Orwell",
        publicationYear: 1949,
        genre: "Dystopian Fiction",
        pages: 328
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        publicationYear: 1813,
        genre: "Romance",
        pages: 279
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publicationYear: 1925,
        genre: "Fiction",
        pages: 180
    }
];

function fin(obj, key, target) {
    return obj.find(val => val[key] == target)
}
// Questions
console.log("1. How many books are there in the collection? \n\n", books.length);

console.log("2. Who is the author of 'To Kill a Mockingbird'?");
console.log(fin(books, 'title', 'To Kill a Mockingbird').author,'\n\n');

console.log("3. What is the genre of '1984'?",);
console.log(fin(books, 'title', '1984').genre,'\n\n');

console.log("4. When was 'Pride and Prejudice' published?");
console.log(fin(books, 'title', 'Pride and Prejudice').publicationYear,'\n\n');

console.log("5. How many pages does 'The Great Gatsby' have?");
console.log(fin(books, 'title', 'The Great Gatsby').pages,'\n\n');

console.log("6. The book with the most pages:?");
console.log(books.reduce((pre, curr) => (curr.pages > pre.pages) ? pre : curr).title,'\n\n');

console.log("7. How many books were published before 1900?");
console.log(books.filter(val=>val.publicationYear>1900).length,'\n\n');

console.log("8. List the titles of the books in alphabetical order");
console.log(books.map(val=>val.title).sort(),'\n\n');

console.log("9. Calculate the average number of pages across all books.?");
let totalPages=books.reduce((sum,book)=>sum+=book.pages,0 )
console.log((totalPages/books.length).toFixed(2),'\n\n'); 

console.log("10. Find the newest book in the collection.?");
console.log(books.reduce((prev, current) => prev.publicationYear > current.publicationYear ? prev : current));

console.log("11. Identify the author(s) who have written more than one book in the collection.");
console.log("Calculate the total number of pages for books in the 'Fiction' genre.");
console.log("Find the book with the longest title.");
console.log("Determine the decade in which the most books were published.");
console.log("List the books published in the 20th century (1900-1999).");
console.log("Find the book with the shortest title.");
console.log("Calculate the total number of pages for books written by female authors.");
console.log("Identify the book(s) with the highest average rating, assuming each book has a rating property.");
console.log("Determine the author with the highest total number of pages across all their books.");
console.log("List the books that have been published in the last decade (2010-2019).");
console.log("Calculate the average publication year of all the books.");
console.log("Find the book with the highest ratio of pages to publication year.");
console.log("Identify the genre that has the most books in the collection.");
console.log("List the authors in alphabetical order along with the number of books they have written.");
console.log("Determine if there are any duplicate books (books with the same title and author).");

