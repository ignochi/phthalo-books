export function getAgeRange(books) {
    return [...new Set(books.map(book => book.ageRange))];
}