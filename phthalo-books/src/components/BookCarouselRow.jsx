import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookCarouselCard } from './BookCarouselCard';

export function BookCarouselRow({ category, books }) {
    const carouselRef = useRef(null);
    const [showBackwardBtn, setShowBackwardBtn] = useState(false);
    const [showForwardBtn, setShowForwardBtn] = useState(false);

    function updateScrollButtons() {
        const carousel = carouselRef.current;

        if (!carousel) return;

        const { scrollLeft, scrollWidth, clientWidth } = carousel;

        // Content exists to the left
        setShowBackwardBtn(scrollLeft > 0);

        // Content exists to the right
        setShowForwardBtn(
            scrollLeft + clientWidth < scrollWidth - 1
        );
    }

    useEffect(() => {
        updateScrollButtons();
    }, []);

    useEffect(() => {
        const carousel = carouselRef.current;

        if (!carousel) return;

        carousel.addEventListener("scroll", updateScrollButtons);

        return () => {
            carousel.removeEventListener("scroll", updateScrollButtons);
        };
    }, []);

    useEffect(() => {
        const carousel = carouselRef.current;

        if (!carousel) return;

        const resizeObserver = new ResizeObserver(() => {
            updateScrollButtons();
        });

        resizeObserver.observe(carousel);

        return () => resizeObserver.disconnect();
    }, []);

    function scrollForward() {
        if (!carouselRef.current) return;

        carouselRef.current.scrollBy({
            left: 151,
            behavior: "smooth"
        });
    }

    function scrollBackward() {
        if (!carouselRef.current) return;

        carouselRef.current.scrollBy({
            left: -151,
            behavior: "smooth"
        });
    }

    return (
        <div
            className="mt-4.5 md:mt-8 mb-9 md:mb-10 relative px-3.5 md:px-7 max-w-300 mx-auto"
        >
            <Link className="w-fit mb-5 flex gap-2 hover:gap-3.5 interactive-transition">
                <span className="text-lg md:text-[1.375rem] font-bold">{category}</span>
                <span className="flex justify-center items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M4 12H18"
                            stroke="#F4C542"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />

                        <path
                            d="M12 6L18 12L12 18"
                            stroke="#F4C542"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
            </Link>

            {showBackwardBtn && (
                <div className="hidden md:block absolute top-0 left-0 z-10 w-7 h-full">
                    <button
                        className="absolute top-[50%] left-0 w-10 h-10 rounded-full flex justify-center items-center bg-burgundy"
                        onClick={scrollBackward}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 31 31" fill="none">
                            <g id="Forward-arrow" transform="rotate(180, 15.5, 15.5)">
                                <g id="Vector">
                                    <path d="M11.3945 7.46289L19.5763 15.8493L11.3945 24.2356" fill="" />
                                    <path d="M11.3945 7.46289L19.5763 15.8493L11.3945 24.2356" stroke="white" strokeWidth="3.25" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                            </g>
                            <defs>
                            </defs>
                        </svg>
                    </button>
                </div>
            )}

            {showForwardBtn && (
                <div className="hidden md:block absolute top-0 right-0 z-10 w-7 h-full">
                    <button
                        className="absolute top-[50%] right-0 w-10 h-10 rounded-full flex justify-center items-center bg-burgundy"
                        onClick={scrollForward}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 31 31" fill="none">
                            <g id="Forward-arrow">
                                <g id="Vector">
                                    <path d="M11.3945 7.46289L19.5763 15.8493L11.3945 24.2356" fill="" />
                                    <path d="M11.3945 7.46289L19.5763 15.8493L11.3945 24.2356" stroke="white" strokeWidth="3.25" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                            </g>
                        </svg>
                    </button>
                </div>
            )}

            <div
                ref={carouselRef}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar"
            >
                {books.map(book => {
                    return (
                        <BookCarouselCard
                            key={book.id}
                            bookCover={book.cover}
                            bookTitle={book.title}
                            cardWidth={"w-33.75"}
                        />
                    );
                })}
            </div>

        </div>
    );
}