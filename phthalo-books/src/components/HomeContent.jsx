// import { useBooks } from '../utils/hooks/useBooks';
import { groupBooksByCategory } from '../utils/groupBooksByCategory';
import { BookCategoryNav } from './BookCategoryNav';
import { FeaturedBooksSection } from './FeaturedBooksSection';
import { BookCarouselRow } from './BookCarouselRow';

export function HomeContent({ books }) {
    // const books = useBooks();
    const booksSectionsArray = groupBooksByCategory(books);

    return (
        <div>
            <div className="px-3.5 md:px-7 max-w-300 mx-auto">
                <BookCategoryNav books={books} />
            </div>

            <div className="max-w-300 mx-auto mt-4.5 md:mt-6">
                <FeaturedBooksSection books={books} />
            </div>

            {booksSectionsArray.map(([category, categoryBooks]) => {
                return (
                    <BookCarouselRow
                        key={category}
                        category={category}
                        books={categoryBooks}
                    />
                );
            })}
            {/* 
                For each [categoryName, booksArray], return a BookCarouselRow component.
                Pass categoryName as the category prop, and booksArray as the books prop.
            */}
        </div>
    );
}