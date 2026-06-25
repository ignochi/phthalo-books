export function getBookLanguages(books) {
    return [...new Set(books.map(book => book.bookLanguage))];
}