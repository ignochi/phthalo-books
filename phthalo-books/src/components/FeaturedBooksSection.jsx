import { useState, useEffect, useRef } from 'react';
import { formatNumberShort } from '../utils/formatNumber';
import { FeaturedBookCard } from './FeaturedBookCard';

export function FeaturedBooksSection({ books }) {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [currentDate, setCurrentDate] = useState(new Date());

    const month = currentDate.toLocaleString('default', {
        month: 'long'
    });
    const day = currentDate.getDate();
    const normalizedDate = new Date(currentDate);

    normalizedDate.setHours(0, 0, 0, 0);

    const bookOfTheDay = books.length
        ? books[
        Math.floor(
            normalizedDate.getTime() / 86400000
        ) % books.length
        ]
        : null;
    const mostReadBook = books.length
        ? books.reduce((max, book) =>
            book.numOfTimesRead > max.numOfTimesRead ? book : max
        )
        : null;
    const numOfTimesReadShort = formatNumberShort(
        mostReadBook?.numOfTimesRead ?? 0
    );

    function handleScroll() {
        if (!containerRef.current) return;

        setActiveIndex(
            Math.round(
                containerRef.current.scrollLeft /
                containerRef.current.clientWidth
            )
        );
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000 * 60); // checks every minute

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const container = containerRef.current;

            if (!container) return;

            container.scrollTo({
                left:
                    activeIndex === 0
                        ? container.clientWidth
                        : 0,
                behavior: 'smooth'
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <>
            <div
                ref={containerRef}
                onScroll={handleScroll}
                className="
                        md:px-7 md:ml-5 flex items-center 
                        gap-5 overflow-x-auto md:overflow-x-visible 
                        snap-x snap-mandatory md:snap-none 
                        no-scrollbar scroll-smooth
                        "
            >

                <div className="min-w-full md:min-w-auto snap-center">
                    <FeaturedBookCard
                        to="/"
                        label="Book of The Day"
                        icon={
                            <div
                                className="
                                    rounded-md overflow-hidden flex 
                                    flex-col justify-center 
                                    items-center w-9.5 h-9.5 
                                    absolute top-[50%] translate-y-[-50%]
                                    "
                            >
                                <div className="w-full h-[30%] bg-red-500"></div>
                                <div
                                    className="
                                        bg-gray-200 w-full h-[70%] 
                                        flex flex-col text-center 
                                        text-gray-700 font-bold
                                        "
                                >
                                    <div className="text-[6px]">{month}</div>
                                    <div className="text-[12px]">{day}</div>
                                </div>
                            </div>
                        }
                        title={bookOfTheDay?.title ?? ""}
                        textContent={
                            <>
                                <br />
                                <span>
                                    A brief description of the book brief description of the book
                                </span>
                            </>
                        }
                        categoryBtnColor="bg-violet-500"
                        category={bookOfTheDay?.category ?? ""}
                        src={bookOfTheDay?.cover ?? null}
                        alt={bookOfTheDay?.title ?? ""}
                    />
                </div>

                <div className="min-w-full md:min-w-auto snap-center">
                    <FeaturedBookCard
                        to="/"
                        label="Most Read Book"
                        icon={
                            <div
                                className="
                                    bg-burgundy rounded-full overflow-hidden 
                                    flex justify-center items-center w-9.5 h-9.5 
                                    absolute top-[50%] translate-y-[-50%]
                                    "
                            >
                                <svg
                                    height="38px"
                                    width="38px"
                                    version="1.1"
                                    id="Capa_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 512 512"
                                    xmlSpace="preserve"
                                    fill="#000000"
                                >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>

                                    <g
                                        id="SVGRepo_tracerCarrier"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></g>

                                    <g id="SVGRepo_iconCarrier">
                                        <g>
                                            <g>
                                                <g>
                                                    <path
                                                        fill="#E84649"
                                                        d="M498.841,395.681v76.341c0,12.115-9.813,21.928-21.928,21.928h-220.91v-98.269H498.841z"
                                                    />

                                                    <path
                                                        fill="#D73337"
                                                        d="M498.841,395.681v76.341c0,12.115-9.813,21.928-21.928,21.928h-23.386
                                c12.115,0,21.928-9.813,21.928-21.928v-76.341H498.841z"
                                                    />

                                                    <path
                                                        fill="#D73337"
                                                        d="M498.841,395.681v24.274c-62.987,1.458-118.749,13.475-165.806,35.709
                                c-29.547,13.957-48.778,28.857-59.237,38.286h-17.794v-98.269H498.841z"
                                                    />

                                                    <path
                                                        fill="#CDBFBB"
                                                        d="M256,334.288V489.79c16.619-17.233,89.568-82.362,245.267-85.246
                                c5.963-0.11,10.733-4.995,10.733-10.959v-59.298H256z"
                                                    />

                                                    <path
                                                        fill="#B9ACAC"
                                                        d="M511.997,334.284v59.303c0,5.964-4.769,10.843-10.734,10.953
                                c-6.436,0.121-12.729,0.34-18.88,0.669c3.684-1.765,6.227-5.537,6.227-9.889v-61.036H511.997z"
                                                    />

                                                    <path
                                                        fill="#EFE2DD"
                                                        d="M512,155.167v188.461c0,5.965-4.77,10.848-10.734,10.961
                                C345.564,357.474,272.617,422.602,256,439.837V229.443
                                c13.887-14.392,67.055-62.202,174.925-79.242
                                c21.15-3.338,44.401-5.501,69.867-5.996
                                C506.942,144.082,512,149.017,512,155.167z"
                                                    />

                                                    <path
                                                        fill="#E0D3CE"
                                                        d="M433.644,181.272c0,97.96-79.684,177.655-177.644,177.655V229.443
                                c13.887-14.392,67.055-62.202,174.925-79.242
                                C432.707,160.287,433.644,170.671,433.644,181.272z"
                                                    />

                                                    <path
                                                        fill="#E0D3CE"
                                                        d="M511.997,155.168v188.468c0,5.953-4.769,10.843-10.734,10.953
                                c-6.951,0.132-13.738,0.384-20.36,0.746
                                c4.473-1.381,7.708-5.57,7.708-10.481V155.168
                                c0-4.703-2.949-8.694-7.094-10.262
                                c6.271-0.34,12.696-0.57,19.274-0.702
                                C506.943,144.084,511.997,149.018,511.997,155.168z"
                                                    />
                                                </g>

                                                <g>
                                                    <path
                                                        fill="#ED6264"
                                                        d="M13.159,395.681v76.341c0,12.115,9.813,21.928,21.928,21.928h220.91v-98.269H13.159z"
                                                    />

                                                    <path
                                                        fill="#E84649"
                                                        d="M13.159,395.681v24.274c62.987,1.458,118.749,13.475,165.806,35.709
                                c29.547,13.957,48.778,28.857,59.237,38.286h17.794v-98.269H13.159z"
                                                    />

                                                    <path
                                                        fill="#E0D3CE"
                                                        d="M256,334.288V489.79c-16.619-17.233-89.568-82.362-245.267-85.246
                                C4.77,404.433,0,399.549,0,393.585l0-59.298H256z"
                                                    />

                                                    <path
                                                        fill="#FFF5F5"
                                                        d="M256,229.443v210.394c-16.617-17.235-89.564-82.363-245.266-85.247
                                C4.77,354.476,0,349.593,0,343.628V155.167
                                c0-6.15,5.058-11.085,11.208-10.961
                                c25.466,0.494,48.717,2.658,69.867,5.996
                                C188.945,167.241,242.113,215.051,256,229.443z"
                                                    />

                                                    <path
                                                        fill="#EFE2DD"
                                                        d="M256,229.443v129.483c-97.96,0-177.644-79.695-177.644-177.655
                                c0-10.601,0.937-20.985,2.72-31.07
                                C188.945,167.241,242.113,215.051,256,229.443z"
                                                    />
                                                </g>
                                            </g>

                                            <g>
                                                <g>
                                                    <circle fill="#FFB54E" cx="256" cy="181.276" r="163.226" />

                                                    <circle fill="#FF9A1B" cx="256.274" cy="181.276" r="136.52" />

                                                    <circle fill="#FFCE8B" cx="256" cy="181.276" r="121.309" />

                                                    <path
                                                        fill="#FFB54E"
                                                        d="M377.586,181.28c0,66.99-54.32,121.309-121.309,121.309
                                c-3.725,0-7.412-0.169-11.052-0.499
                                c61.816-5.578,110.257-57.546,110.257-120.811
                                c0-63.274-48.441-115.233-110.257-120.811
                                c3.64-0.329,7.327-0.499,11.052-0.499
                                C323.266,59.97,377.586,114.281,377.586,181.28z"
                                                    />
                                                </g>

                                                <g>
                                                    <text
                                                        x="256"
                                                        y="220"
                                                        textAnchor="middle"
                                                        fontSize="65"
                                                        fontWeight="bold"
                                                        fill="#FFA730"
                                                    >
                                                        {numOfTimesReadShort}
                                                    </text>
                                                    {/* <path
                                                                        fill="#FFA730"
                                                                        d="M276.161,212.614l0-80.392c0-5.562-2.336-10.96-6.654-14.465
                                c-6.315-5.126-15.036-5.39-21.558-1.025l-29.694,19.875
                                c-4.16,2.785-5.275,8.414-2.491,12.575l10.084,15.066
                                c2.785,4.16,8.414,5.275,12.575,2.491l1.482-0.992v46.867h-13.097
                                c-5.006,0-9.064,4.058-9.064,9.064v18.129
                                c0,5.006,4.058,9.064,9.064,9.064h62.452
                                c5.006,0,9.064-4.058,9.064-9.064v-18.129
                                c0-5.006-4.058-9.064-9.064-9.064H276.161z"
                                                                    /> */}
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        }
                        title={mostReadBook?.title ?? ""}
                        textContent={
                            <span>
                                {" "}has been read {
                                    <span className="font-bold text-emerald-500">
                                        {numOfTimesReadShort}
                                    </span>
                                }{" "}times
                            </span>
                        }
                        categoryBtnColor="bg-burgundy"
                        category={mostReadBook?.category ?? ""}
                        src={mostReadBook?.cover ?? null}
                        alt={mostReadBook?.title ?? ""}
                    />
                </div>
            </div>

            <div className="md:hidden flex justify-center gap-2 mt-3">
                <div
                    className={`
                                w-2.5 h-2.5 rounded-full cursor-pointer transition-all
                                ${activeIndex === 0
                            ? 'bg-emerald-500 w-5'
                            : 'bg-gray-300'
                        }
                                `}
                    onClick={() => {
                        containerRef.current?.scrollTo({
                            left: 0,
                            behavior: 'smooth'
                        });
                    }}
                ></div>

                <div
                    className={`
                                w-2.5 h-2.5 rounded-full cursor-pointer transition-all
                                ${activeIndex === 1
                            ? 'bg-emerald-500 w-5'
                            : 'bg-gray-300'
                        }
                                `}
                    onClick={() => {
                        containerRef.current?.scrollTo({
                            left:
                                containerRef.current.clientWidth,
                            behavior: 'smooth'
                        });
                    }}
                ></div>
            </div>
        </>
    );
}