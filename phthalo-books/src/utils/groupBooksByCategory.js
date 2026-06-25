// An array of arrays, where each inner array is a [category, books] pair. 
// The category is a string, and the books is an array of book objects that 
// belong to that category.

export function groupBooksByCategory(books) {
    return Object.entries(
        books.reduce((acc, book) => {
            if (!acc[book.category]) {
                acc[book.category] = [];
            }

            acc[book.category].push(book);

            return acc;
        }, {})
    );
}