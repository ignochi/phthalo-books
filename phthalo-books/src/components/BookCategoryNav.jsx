import { Link } from 'react-router-dom';
import { getBookCategories } from '../utils/getBookCategories';

export function BookCategoryNav({ books }) {
    const categories = getBookCategories(books);
    const bgColors = ["#800020", "#f2711c", "#21ba45", "#EFBF04", "#20c4cb", "#285bd4"];

    return (
        <div className="mt-4.5 md:mt-6 w-full flex justify-between items-center">
            <div className="flex flex-nowrap md:flex-wrap gap-1.25 md:gap-3 items-center h-7 overflow-x-auto md:overflow-x-hidden overflow-y-hidden no-scrollbar md:w-[80%]">
                {categories.map((category, index) => {
                    return (
                        <Link
                            key={category}
                            to="/"
                            className="flex justify-center items-center h-7 px-3 text-nowrap rounded-[15px] text-xs font-bold"
                            style={{ backgroundColor: bgColors[index % bgColors.length] }}
                        >
                            {category}
                        </Link>
                    );
                })}
            </div>
            <Link to="/" className="hidden md:block font-bold">See all</Link>
        </div>
    );
}