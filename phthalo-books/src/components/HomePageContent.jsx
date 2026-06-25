import { useState, useMemo } from 'react';
import { useBooks } from '../utils/hooks/useBooks';
import { SearchBar } from './SearchBar';
import { SearchResultsPanel } from './SearchResultsPanel';
import { HomeContent } from './HomeContent';

export function HomePageContent({
    inputRef, filters, setFilters,
    recentSearches, setRecentSearches
}) {
    const [displaySearchResults, setDisplaySearchResults] = useState(false);
    const books = useBooks();
    const filteredBooks = useMemo(() => {
        const query = filters.query.trim().toLowerCase();

        return books.filter(book => {
            // Search query
            const matchesQuery =
                query === "" ||
                book.title.toLowerCase().includes(query) ||
                book.author.toLowerCase().includes(query) ||
                book.category.toLowerCase().includes(query);

            // Age range
            const matchesAgeRange =
                filters.ageRange === "All ages" ||
                book.ageRange === filters.ageRange;

            // Language
            const matchesLanguage =
                filters.language === "All Languages" ||
                book.language === filters.language;

            return (
                matchesQuery &&
                matchesAgeRange &&
                matchesLanguage
            );
        });
    }, [books, filters]);

    return (
        <div className="mb-20">
            <div className="px-3.5 md:px-7 pt-3.5 md:pt-5 max-w-300 mx-auto">
                <SearchBar
                    inputRef={inputRef}
                    displaySearchResults={displaySearchResults}
                    setDisplaySearchResults={setDisplaySearchResults}
                    filters={filters}
                    setFilters={setFilters}
                    setRecentSearches={setRecentSearches}
                    books={books}
                />
            </div>

            {
                (displaySearchResults) ?
                    <SearchResultsPanel
                        books={filteredBooks}
                        recentSearches={recentSearches}
                        setRecentSearches={setRecentSearches}
                        setFilters={setFilters}
                    /> :
                    <HomeContent
                        books={books}
                    />
            }

        </div>
    );
}