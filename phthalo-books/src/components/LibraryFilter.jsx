import { useState, useEffect, useMemo } from "react";
import { getAgeRange } from "../utils/getAgeRange";
import { getBookLanguages } from "../utils/getBookLanguages";

const ALL_AGES = "All ages";
const ALL_LANGUAGES = "All Languages";

export function LibraryFilter({
    books, onCloseClick,
    filters, setFilters
}) {
    const [selectedAgeRange, setSelectedAgeRange] = useState(filters.ageRange);
    const [selectedLanguage, setSelectedLanguage] = useState(filters.language);

    const ageRanges = useMemo(() => {
        const ranges = getAgeRange(books);

        const sortedRanges = [...ranges].sort((a, b) => {
            const firstAgeA = Number(a.match(/\d+/)?.[0] ?? 0);
            const firstAgeB = Number(b.match(/\d+/)?.[0] ?? 0);

            return firstAgeA - firstAgeB;
        });

        return [...new Set([ALL_AGES, ...sortedRanges])];
    }, [books]);

    const languages = useMemo(
        () => [...new Set([
            ALL_LANGUAGES,
            ...getBookLanguages(books).toSorted((a, b) =>
                a.localeCompare(b)
            )
        ])],
        [books]
    );

    const handleApplyFilters = (e) => {
        e.preventDefault();

        setFilters(prev => ({
            ...prev,
            ageRange: selectedAgeRange,
            language: selectedLanguage
        }));

        onCloseClick();
    };

    const handleResetFilters = () => {
        setFilters(prev => ({
            ...prev,
            ageRange: ALL_AGES,
            language: ALL_LANGUAGES
        }));

        onCloseClick();
    };

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <div
            onClick={onCloseClick}
            className="bg-black/30 fixed inset-0 z-20 flex justify-center items-center">
            <div
                onClick={(e) => e.stopPropagation()}
                className="
                    bg-white rounded-[15px] text-gray-600 w-full 
                    md:w-107.5 h-dvh pt-8 px-10 pb-7.5 relative overflow-y-auto
                "
            >
                <div>
                    <button
                        type="button"
                        aria-label="Close filters"
                        onClick={onCloseClick}
                        className="absolute top-3 right-3 cursor-pointer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28px"
                            height="28px"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M6 6L18 18M18 6L6 18"
                                stroke="#123524"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    <div
                        className="text-xl text-background font-semibold mb-7.5 text-center"
                    >
                        Library Filters
                    </div>

                    <form onSubmit={handleApplyFilters}>
                        <fieldset>
                            <legend className="mb-5 text-base">Age Range</legend>
                            <div
                                className="
                                    flex gap-x-2.5 gap-y-6 flex-wrap text-center 
                                    text-white text-xs font-semibold
                                "
                            >
                                {
                                    ageRanges.map((ageRange) => {
                                        return (
                                            <label
                                                key={ageRange}
                                                className="cursor-pointer"
                                            >
                                                <input
                                                    type="radio"
                                                    name="age_range"
                                                    value={ageRange}
                                                    checked={selectedAgeRange === ageRange}
                                                    onChange={() => setSelectedAgeRange(ageRange)}
                                                    className="sr-only"
                                                />

                                                <span
                                                    aria-hidden="true"
                                                    className={`
                                                        rounded-[30px] py-1.75 px-2.5 interactive-transition
                                                        ${selectedAgeRange === ageRange
                                                            ? "bg-background"
                                                            : "bg-rosemary"}
                                                    `}
                                                >
                                                    {ageRange}
                                                </span>
                                            </label>
                                        );
                                    })
                                }
                            </div>
                            <hr
                                className="
                                    border-0 w-[calc(100%+60px)] relative 
                                    -left-7.5 h-[.5px] bg-[#d8d8d8] my-5
                                "
                            />
                        </fieldset>

                        <fieldset>
                            <legend
                                className="mb-5 text-base"
                            >
                                Book Language
                            </legend>
                            <div className="pb-0.5">
                                {
                                    languages.map((language) => {
                                        return (
                                            <label
                                                key={language}
                                                className="
                                                    flex justify-start items-center gap-4 mb-2.75 
                                                    cursor-pointer w-fit
                                                "
                                            >
                                                <input
                                                    type="radio"
                                                    name="book_language"
                                                    value={language}
                                                    checked={selectedLanguage === language}
                                                    onChange={() => setSelectedLanguage(language)}
                                                    className="
                                                        appearance-none w-7 h-7 border-2 border-background 
                                                        rounded-full grid place-content-center interactive-transition
                                                        before:w-4.5 before:h-4.5 before:rounded-full before:scale-0
                                                        before:interactive-transition checked:before:scale-100
                                                        before:bg-background cursor-pointer
                                                    "
                                                />
                                                <span className="text-sm font-medium">{language}</span>
                                            </label>
                                        );
                                    })
                                }
                            </div>
                            <hr
                                className="
                                    border-0 w-[calc(100%+60px)] relative 
                                    -left-7.5 h-[.5px] bg-[#d8d8d8] my-5
                                "
                            />
                        </fieldset>

                        <div
                            className="flex flex-col justify-center items-center">
                            <button
                                type="submit"
                                className="
                                    text-white rounded-full bg-[#314459] px-7.5 
                                    text-xs font-bold h-10 cursor-pointer
                                "
                            >
                                APPLY FILTERS
                            </button>
                            <button
                                className="text-background font-bold mt-3.75 cursor-pointer"
                                type="button"
                                onClick={handleResetFilters}
                            >
                                Reset filters
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}