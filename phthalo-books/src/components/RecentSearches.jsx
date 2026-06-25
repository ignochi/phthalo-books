export function RecentSearches({ recentSearches, setFilters }) {
    // const recentSearches = ["Recent Search 1", "Recent Search 2", "Recent Search 3"];

    return (
        <ul
            className="m-0 p-0 w-full divide-y divide-white">
            {recentSearches.map((query) => {
                return (
                    <li
                        key={query}
                        className="h-11"
                    >
                        <button
                            type="button"
                            onClick={() => {
                                setFilters(prev => ({
                                    ...prev,
                                    query
                                }));
                            }}
                            className="
                                block w-full h-full text-left text-white 
                                py-2.5 pl-0.75 text-base font-medium
                            "
                        >
                            {query}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}