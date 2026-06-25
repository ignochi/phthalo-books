import { NavLink } from "react-router-dom";

export function MobileMenuBar({ onMenuClick }) {
    return (
        <nav
            className="
                bg-background px-3.5 fixed bottom-0 flex flex-row md:hidden w-full 
                justify-between items-center gap-4.5 text-xs font-semibold border-t
            "
        >
            <NavLink
                to="/"
                className="
                        group p-2 flex flex-col justify-between items-center
                    "
            >
                <span className="w-6 group-hover:text-mint-green interactive-transition">
                    <svg
                        width="24px"
                        height="24px"
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
                                d="M12 12H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM16 8L9.5 9.5L8 16L14.5 14.5L16 8Z"
                                stroke="currentColor"
                                strokeWidth="1.56"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                    </svg>
                </span>
                <span className="group-hover:text-mint-green">
                    EXPLORE
                </span>
            </NavLink>

            <NavLink
                to="/"
                className="
                        group p-2 flex flex-col justify-between items-center
                    "
            >
                <span className="w-6 group-hover:text-mint-green interactive-transition">
                    <svg
                        width="24px"
                        height="24px"
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
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                                stroke="currentColor"
                                strokeWidth="1.56"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                    </svg>
                </span>
                <span className="group-hover:text-mint-green">
                    SAVED
                </span>
            </NavLink>

            <NavLink
                to="/"
                className="
                        group p-2 flex flex-col justify-between items-center
                    "
            >
                <span className="w-6 group-hover:text-mint-green interactive-transition">
                    <svg
                        width="24px"
                        height="24px"
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
                                d="M12 14V17M12 14C9.58104 14 7.56329 12.2822 7.10002 10M12 14C14.419 14 16.4367 12.2822 16.9 10M17 5H19.75C19.9823 5 20.0985 5 20.1951 5.01921C20.5918 5.09812 20.9019 5.40822 20.9808 5.80491C21 5.90151 21 6.01767 21 6.25C21 6.94698 21 7.29547 20.9424 7.58527C20.7056 8.77534 19.7753 9.70564 18.5853 9.94236C18.2955 10 17.947 10 17.25 10H17H16.9M7 5H4.25C4.01767 5 3.90151 5 3.80491 5.01921C3.40822 5.09812 3.09812 5.40822 3.01921 5.80491C3 5.90151 3 6.01767 3 6.25C3 6.94698 3 7.29547 3.05764 7.58527C3.29436 8.77534 4.22466 9.70564 5.41473 9.94236C5.70453 10 6.05302 10 6.75 10H7H7.10002M12 17C12.93 17 13.395 17 13.7765 17.1022C14.8117 17.3796 15.6204 18.1883 15.8978 19.2235C16 19.605 16 20.07 16 21H8C8 20.07 8 19.605 8.10222 19.2235C8.37962 18.1883 9.18827 17.3796 10.2235 17.1022C10.605 17 11.07 17 12 17ZM7.10002 10C7.03443 9.67689 7 9.34247 7 9V4.57143C7 4.03831 7 3.77176 7.09903 3.56612C7.19732 3.36201 7.36201 3.19732 7.56612 3.09903C7.77176 3 8.03831 3 8.57143 3H15.4286C15.9617 3 16.2282 3 16.4339 3.09903C16.638 3.19732 16.8027 3.36201 16.901 3.56612C17 3.77176 17 4.03831 17 4.57143V9C17 9.34247 16.9656 9.67689 16.9 10"
                                stroke="currentColor"
                                strokeWidth="1.56"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                    </svg>
                </span>
                <span className="group-hover:text-mint-green">
                    PROGRESS
                </span>
            </NavLink>

            <button
                type="button"
                onClick={onMenuClick}
                className="
                        group p-2 flex flex-col justify-between items-center
                    "
            >
                <span className="w-6 group-hover:text-mint-green interactive-transition">
                    <svg
                        width="24px"
                        height="24px"
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
                </span>
                <span className="group-hover:text-mint-green">
                    MENU
                </span>
            </button>
        </nav>
    );
}

/* 
<nav className="fixed bottom-0 flex md:hidden justify-center items-center gap-8 text-xs font-semibold">
    <NavLink to="/" className="group">
        <span className="flex flex-col justify-between items-center gap-1.5">
            <span className="w-8.5 group-hover:text-mint-green interactive-transition">
                <svg
                    width="34px"
                    height="34px"
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
                            d="M12 12H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM16 8L9.5 9.5L8 16L14.5 14.5L16 8Z"
                            stroke="currentColor"
                            strokeWidth="1.56"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                </svg>
            </span>
            <span>EXPLORE</span>
        </span>
    </NavLink>
    <NavLink to="/" className="group">
        <span className="flex flex-col justify-between items-center gap-1.5">
            <span className="w-9 group-hover:text-mint-green interactive-transition">
                <svg
                    width="36px"
                    height="36px"
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
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                            stroke="currentColor"
                            strokeWidth="1.56"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                </svg>
            </span>
            <span>SAVED</span>
        </span>
    </NavLink>
    <NavLink to="/" className="group">
        <span className="flex flex-col justify-between items-center gap-1.5">
            <span className="w-9 group-hover:text-mint-green interactive-transition">
                <svg
                    width="36px"
                    height="36px"
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
                            d="M12 14V17M12 14C9.58104 14 7.56329 12.2822 7.10002 10M12 14C14.419 14 16.4367 12.2822 16.9 10M17 5H19.75C19.9823 5 20.0985 5 20.1951 5.01921C20.5918 5.09812 20.9019 5.40822 20.9808 5.80491C21 5.90151 21 6.01767 21 6.25C21 6.94698 21 7.29547 20.9424 7.58527C20.7056 8.77534 19.7753 9.70564 18.5853 9.94236C18.2955 10 17.947 10 17.25 10H17H16.9M7 5H4.25C4.01767 5 3.90151 5 3.80491 5.01921C3.40822 5.09812 3.09812 5.40822 3.01921 5.80491C3 5.90151 3 6.01767 3 6.25C3 6.94698 3 7.29547 3.05764 7.58527C3.29436 8.77534 4.22466 9.70564 5.41473 9.94236C5.70453 10 6.05302 10 6.75 10H7H7.10002M12 17C12.93 17 13.395 17 13.7765 17.1022C14.8117 17.3796 15.6204 18.1883 15.8978 19.2235C16 19.605 16 20.07 16 21H8C8 20.07 8 19.605 8.10222 19.2235C8.37962 18.1883 9.18827 17.3796 10.2235 17.1022C10.605 17 11.07 17 12 17ZM7.10002 10C7.03443 9.67689 7 9.34247 7 9V4.57143C7 4.03831 7 3.77176 7.09903 3.56612C7.19732 3.36201 7.36201 3.19732 7.56612 3.09903C7.77176 3 8.03831 3 8.57143 3H15.4286C15.9617 3 16.2282 3 16.4339 3.09903C16.638 3.19732 16.8027 3.36201 16.901 3.56612C17 3.77176 17 4.03831 17 4.57143V9C17 9.34247 16.9656 9.67689 16.9 10"
                            stroke="currentColor"
                            strokeWidth="1.56"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                </svg>
            </span>
            <span>PROGRESS</span>
        </span>
    </NavLink>
</nav>
*/ 