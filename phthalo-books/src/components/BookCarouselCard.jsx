// import { useRef } from 'react';
import { Link } from 'react-router-dom';

export function BookCarouselCard({ bookCover, bookTitle, cardWidth }) {
    // const bookCardRef = useRef(null);

    return (
        <Link
            className={`block flex-none ${cardWidth} snap-start`}
        >
            <div className="rounded-xl overflow-hidden shadow">
                <div className="aspect-2/3">
                    <img
                        src={bookCover}
                        alt={bookTitle}
                        loading="lazy"
                        className="
                        w-full h-full object-cover 
                        hover:scale-[1.05] interactive-transition
                        "
                    />
                </div>

                <div className="bg-[#101f29] p-2 h-14">
                    <h3 className="text-sm font-semibold line-clamp-2">
                        {bookTitle}
                    </h3>
                </div>
            </div>
        </Link>
    );
}