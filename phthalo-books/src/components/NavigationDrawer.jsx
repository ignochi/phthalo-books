import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoIcon from "../assets/icons/logo.svg";
import howToUseIcon from "../assets/icons/how-to-use.svg";
import settingsIcon from "../assets/icons/settings.svg";
import languageIcon from "../assets/icons/language.svg";
import helpIcon from "../assets/icons/help.svg";
import termsIcon from "../assets/icons/terms.svg";
import loginIcon from "../assets/icons/log-in.svg";
import { CloseIcon } from "./CloseIcon";

const navLinks = [
    {
        text: "Why PhthaloBooks?",
        address: "/",
        icon: logoIcon
    },
    {
        text: "How To Use PhthaloBooks",
        address: "/",
        icon: howToUseIcon
    },
    {
        text: "Account Settings",
        address: "/",
        icon: settingsIcon
    },
    {
        text: "App Language",
        address: "/",
        icon: languageIcon
    },
    {
        text: "Get Help",
        address: "/",
        icon: helpIcon
    },
    {
        text: "Terms & Conditions",
        address: "/",
        icon: termsIcon
    },
    {
        text: "Login Or Create An Account",
        address: "/",
        icon: loginIcon
    },
];

export function NavigationDrawer({
    isOpen, onCloseClick,
    setFilters, setRecentSearches
}) {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // set the other query
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

        setQuery("");
        onCloseClick();
        // focus on the other input
        // if (inputRef.current) {
        //     inputRef.current.focus();
        // }
    };

    useEffect(() => {
        if (!isOpen) return;

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-20 flex"
        >
            <div className="bg-background w-full md:w-[50%] md:p-3 h-dvh overflow-y-auto">
                <div className="md:max-w-105 md:mx-auto">
                    <header className="w-full border-b mb-5">
                        <div
                            className="
                            flex justify-between items-center gap-3.5 
                            px-3.5 md:px-7 py-3.5 md:py-5 max-w-300 mx-auto
                        "
                        >
                            <Link
                                to="/"
                                onClick={onCloseClick}
                                className="
                                    flex justify-between items-center gap-10 
                                    text-xl font-semibold text-cream
                                "
                            >
                                PhthaloBooks
                            </Link>


                            <div className="flex justify-center items-center group">
                                <button
                                    type="button"
                                    onClick={onCloseClick}
                                    className="
                                group-hover:text-mint-green interactive-transition cursor-pointer
                            "
                                >
                                    <CloseIcon />
                                </button>
                            </div>
                        </div>
                    </header>

                    <form
                        role="search"
                        onSubmit={handleSubmit}
                        className="flex justify-between items-center gap-4 px-3.5 md:px-7 mb-10">
                        <label className="block flex-1 relative rounded-[40px] overflow-hidden">
                            <input
                                type="search"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Find a book..."
                                aria-label="Search for books"
                                autoFocus
                                className="
                                    bg-white text-black text-sm font-medium block w-full h-11 pl-12 pr-4 
                                    focus:outline-none placeholder:text-gray-400
                                    [&::-webkit-search-cancel-button]:appearance-none 
                                    appearance-none
                                "
                            />
                            <span className="absolute left-0 top-0 h-full w-11 flex justify-center items-center">
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    width="22px"
                                    height="22px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>

                                    <g
                                        id="SVGRepo_tracerCarrier"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></g>

                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                                            stroke="#800020"
                                            strokeWidth="2.56"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </g>
                                </svg>
                            </span>
                        </label>

                        <button
                            type="submit"
                            className="w-10 h-10 rounded-full flex justify-center items-center bg-burgundy"
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
                    </form>

                    <ul className="px-3.5 md:px-7 m-0 list-none">
                        {
                            navLinks.map((link) => {
                                return (
                                    <li
                                        key={link.text}
                                    >
                                        <Link
                                            to="/"
                                            onClick={onCloseClick}
                                            className="
                                                h-16.25 flex items-center w-full 
                                                gap-2 text-base font-medium border-b 
                                                border-b-gold hover:text-gold interactive-transition
                                            "
                                        >
                                            <div>
                                                <img
                                                    src={link.icon}
                                                    loading="lazy"
                                                    alt=""
                                                    aria-hidden="true"
                                                    focusable="false"
                                                    className="w-6 h-6"
                                                />
                                            </div>
                                            <span>{link.text}</span>
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </ul>

                    <div className="mt-6.25 md:mt-18.75">
                        <div className="text-center text-xs">
                            <span>powered by</span>
                            <br />
                            <span className="text-sm font-semibold">PhthaloBooks</span>
                        </div>
                    </div>

                    <div className="mt-10 pb-5 text-center text-xs font-semibold select-none">
                        Copyright &copy; PhthaloBooks - All rights reserved.
                    </div>

                </div>
            </div>
            <div
                onClick={onCloseClick}
                className="bg-black/30 w-full md:w-[50%] hidden md:block">
            </div>
        </div>
    );
}