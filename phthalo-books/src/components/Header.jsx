import { NavLink } from "react-router-dom";
import { NavBar } from './NavBar';

export function Header({ onMenuClick }) {
    return (
        <header className="bg-background sticky top-0 z-20 w-full border-b">
            <div
                className="
                    flex justify-between items-center gap-3.5 
                    px-3.5 md:px-7 py-3.5 md:py-5 max-w-300 mx-auto
                "
            >

                <div className="flex justify-between items-center gap-10">
                    <NavLink to="/">
                        <span className="text-xl font-semibold text-cream">
                            PhthaloBooks
                        </span>
                    </NavLink>

                    <NavBar />
                </div>

                <div className="flex justify-center items-center gap-5">
                    <NavLink to="/" className="group">
                        <span className="flex flex-row-reverse md:flex-row justify-between items-center gap-1">
                            <span
                                className="
                                    w-6.5 md:w-9 group-hover:text-mint-green interactive-transition
                                "
                            >
                                <svg
                                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>

                                    <g
                                        id="SVGRepo_tracerCarrier"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></g>

                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                                            stroke="currentColor"
                                            strokeWidth="1.92"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />

                                        <path
                                            d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                                            stroke="currentColor"
                                            strokeWidth="1.92"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </g>
                                </svg>
                            </span>
                            <span className="text-[14px] md:text-xs font-semibold">
                                SIGN IN
                            </span>
                        </span>
                    </NavLink>

                    <div className="hidden md:flex justify-center items-center group">
                        <button
                            type="button"
                            onClick={onMenuClick}
                            className="
                                group-hover:text-mint-green interactive-transition cursor-pointer
                            "
                        >
                            <svg
                                width="33px"
                                height="33px"
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
                                        d="M20 7L4 7"
                                        stroke="currentColor"
                                        strokeWidth="1.56"
                                        strokeLinecap="round"
                                    />

                                    <path
                                        d="M20 12L4 12"
                                        stroke="currentColor"
                                        strokeWidth="1.56"
                                        strokeLinecap="round"
                                    />

                                    <path
                                        d="M20 17L4 17"
                                        stroke="currentColor"
                                        strokeWidth="1.56"
                                        strokeLinecap="round"
                                    />
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}