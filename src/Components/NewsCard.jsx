import { FaRegBookmark, FaRegEye, FaShareAlt, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
    const {
        title,
        rating,
        total_view,
        author,
        image_url,
        details,
    } = news;

    console.log(image_url);

    // Format date
    const formattedDate = new Date(author?.published_date).toISOString().split("T")[0];

    return (
        <div className="card bg-base-100 rounded-xl shadow-sm overflow-hidden mb-3">
            {/* Author section */}
            <div className="flex items-center justify-between p-4 bg-base-200">
                <div className="flex items-center gap-3">
                    <img
                        src={author?.img}
                        alt={author?.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="font-semibold text-sm">{author?.name}</h2>
                        <p className="text-xs text-gray-500">{formattedDate}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <FaRegBookmark className="text-gray-500 cursor-pointer" />
                    <FaShareAlt className="text-gray-500 cursor-pointer" />
                </div>
            </div>

            {/* Title */}
            <h3 className="px-4 font-bold text-lg text-gray-800 leading-snug">
                {title}
            </h3>

            {/* Thumbnail */}
            <figure className="px-4 pt-3">
                <img
                    src={image_url}
                    alt={title}
                    className="w-full rounded-md object-cover"
                />
            </figure>

            {/* Details */}
            <div className="p-4 border-t border-base-200">
                <p className="text-sm text-gray-600 leading-relaxed">
                    {details.slice(0, 180)}...
                    <span className="text-[#D72050] font-medium cursor-pointer"> Read More</span>
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1 text-orange-500">
                        {Array.from({ length: 5 }, (_, i) => (
                            <FaStar
                                key={i}
                                className={i < rating.number ? "text-orange-400" : "text-gray-300"}
                            />
                        ))}
                        <span className="text-gray-600 font-medium">{rating.number}</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <FaRegEye className="text-gray-500" />
                        <span>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
