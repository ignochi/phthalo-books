import { useState } from 'react';
import { LibraryFilter } from './LibraryFilter';
import { SearchIcon } from './SearchIcon';
import { FilterIcon } from './FilterIcon';
import { CloseIcon } from './CloseIcon';

export function SearchBar({
    inputRef, displaySearchResults, setDisplaySearchResults,
    filters, setFilters, setRecentSearches, books
}) {
    // const inputRef = useRef(null);
    const [displayLibraryFilter, setDisplayLibraryFilter] = useState(false);
    const handleInputChange = (e) => {
        const query = e.target.value;

        setFilters(prev => ({
            ...prev,
            query
        }));

        if (!query.trim()) return;

        setRecentSearches(prev => {
            const updated = [
                query,
                ...prev.filter(s => s !== query)
            ].slice(0, 3);

            localStorage.setItem(
                "recentSearches",
                JSON.stringify(updated)
            );

            return updated;
        });
    };

    return (
        <>
            <div className="flex justify-start items-center gap-2">
                <form
                    role="search"
                    autoComplete="off"
                    className={`
                    bg-white/15 backdrop-blur-3xl w-full
                    interactive-transition h-11.25 flex items-center 
                    rounded-lg overflow-hidden md:w-87 
                    ${displaySearchResults && "md:w-173.5"}
                `}
                >
                    <label className="block flex-1 relative h-full">
                        <input
                            ref={inputRef}
                            type="search"
                            autoComplete="off"
                            name="query"
                            value={filters.query}
                            onChange={handleInputChange}
                            placeholder="Find a book..."
                            aria-label="Search for books"
                            onFocus={() => setDisplaySearchResults(true)}
                            className="
                            block w-full h-full pl-12 pr-4 focus:outline-none 
                            [&::-webkit-search-cancel-button]:appearance-none 
                            appearance-none autofill:bg-transparent
                            autofill:text-current
                        "
                        />
                        <div className="absolute left-0 top-0 h-full w-11 flex justify-center items-center">
                            <SearchIcon />
                        </div>
                    </label>
                    <button
                        type="button"
                        className="w-12 h-full"
                        aria-label="Open filters"
                        onClick={() => setDisplayLibraryFilter(true)}
                    >
                        <span className="w-full h-8.75 border-l border-l-white flex justify-center items-center">
                            <FilterIcon />
                        </span>
                    </button>
                </form>

                {
                    displaySearchResults &&
                    <button
                        aria-label="Close search"
                        onClick={() => {
                            setDisplaySearchResults(false);
                            setFilters(prev => ({
                                ...prev,
                                query: ""
                            }));
                        }}
                        className="w-6 h-6 flex justify-center items-center"
                    >
                        <CloseIcon />
                    </button>
                }
            </div>

            {
                displayLibraryFilter && (
                    <LibraryFilter
                        books={books}
                        onCloseClick={() => {
                            setDisplayLibraryFilter(false);
                            inputRef.current?.focus();
                        }}
                        filters={filters}
                        setFilters={setFilters}
                    />
                )
            }
        </>
    );
}