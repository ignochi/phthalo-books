import { useState, useRef } from 'react';
import { Header } from '../components/Header';
import { HomePageContent } from '../components/HomePageContent';
import { MobileMenuBar } from '../components/MobileMenuBar';
import { NavigationDrawer } from '../components/NavigationDrawer';
// import { getBooks } from '../services/api';

export function HomePage() {
    const inputRef = useRef(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [filters, setFilters] = useState({
        query: "",
        ageRange: "All ages",
        language: "All Languages"
    });
    const [recentSearches, setRecentSearches] = useState(() => {
        return JSON.parse(
            localStorage.getItem("recentSearches")
        ) ?? [];
    });

    return (
        <>
            <Header
                onMenuClick={() => setIsDrawerOpen(true)}
            />
            <HomePageContent
                inputRef={inputRef}
                filters={filters}
                setFilters={setFilters}
                recentSearches={recentSearches}
                setRecentSearches={setRecentSearches}
            />
            <MobileMenuBar
                onMenuClick={() => setIsDrawerOpen(true)}
            />
            <NavigationDrawer
                isOpen={isDrawerOpen}
                onCloseClick={() => {
                    setIsDrawerOpen(false);
                    if (inputRef.current) {
                        inputRef.current.focus();
                    }
                }}
                setFilters={setFilters}
                setRecentSearches={setRecentSearches}
            />
        </>
    );
}