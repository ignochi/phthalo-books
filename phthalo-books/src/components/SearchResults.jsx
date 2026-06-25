import { BookCarouselCard } from './BookCarouselCard';

export function SearchResults({ books }) {
    return (
        <>
            <div
                className="text-white text-base font-bold mb-6.25"
            >
                Search Results:
            </div>

            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-x-4 gap-y-8">
                {books.map((book) => {
                    return (
                        <BookCarouselCard
                            key={book.id}
                            bookCover={book.cover}
                            bookTitle={book.title}
                            cardWidth={"w-full"}
                        />
                    );
                })}
            </div>
        </>
    );
}