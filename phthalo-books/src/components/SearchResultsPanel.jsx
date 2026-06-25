import { RecentSearches } from './RecentSearches';
import { SearchResults } from './SearchResults';

export function SearchResultsPanel({ books, recentSearches, setRecentSearches, setFilters }) {
    const handleClearRecentSearches = () => {
        localStorage.removeItem("recentSearches");
        setRecentSearches([]);
    };

    return (
        <div className="mt-4.5 md:mt-6 px-3.5 md:px-7 max-w-300 mx-auto">
            <div className="w-full md:w-181.5">
                <div className="text-base flex justify-between items-center">
                    <span className="font-bold">
                        Your recent searches
                    </span>
                    <button
                        type="button"
                        className="font-medium text-gold"
                        onClick={handleClearRecentSearches}
                    >
                        Clear
                    </button>
                </div>

                <div className="my-6.5">
                    <RecentSearches
                        recentSearches={recentSearches}
                        setFilters={setFilters}
                    />
                </div>
            </div>

            <SearchResults
                books={books}
            />
        </div>
    );
}