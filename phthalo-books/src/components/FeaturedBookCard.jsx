import { Link } from 'react-router-dom';

export function FeaturedBookCard({
    to = "/",
    label,
    icon,
    title,
    textContent,
    categoryBtnColor,
    category,
    src,
    alt
}) {
    return (
        <Link to={to}>
            <div
                className="
                flex p-2.75 gap-2.75 h-36.5
                bg-white md:max-w-89 md:rounded-[15px]
                "
            >
                <div className="flex-1">
                    <div className="relative">
                        <div
                            className="
                                bg-dark-phthalo-green flex 
                                justify-center items-center 
                                w-fit h-7 pl-14 pr-4 text-xs 
                                font-bold rounded-[15px]
                                "
                        >
                            {label}
                        </div>
                        {icon}
                    </div>
                    <div
                        className="
                        mt-2.75 text-sm font-medium 
                        text-dark-phthalo-green line-clamp-2
                        "
                    >
                        <strong
                            className="font-bold text-emerald-500"
                        >
                            {title}
                        </strong>
                        {textContent}
                    </div>
                    <span
                        className={`
                            block mt-2.75 w-fit 
                            text-xs font-semibold px-3.5 
                            py-1 rounded-[5px]
                            ${categoryBtnColor}
                            `}
                    >
                        {category}
                    </span>
                </div>
                <div className="w-18.5 h-31 flex-none">
                    <img
                        src={src}
                        alt={alt}
                        loading="lazy"
                        className="rounded-[15px] w-full h-full object-cover"
                    />
                </div>
            </div>
        </Link>
    );
}
