export function getBookCategories(books) {
    return [...new Set(books.map(book => book.category))];
}