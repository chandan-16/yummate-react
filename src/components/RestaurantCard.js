import { Link } from "react-router-dom";
import "../components/RestaurantCard.css";

const RestaurantCard = ({restaurant}) => {
  const { title, ratingAndTime, category, area } = restaurant;
  const path = "/restaurant/" + restaurant['web-scraper-order'];
  return (
    <Link to={path} className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%]">
      <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-xl overflow-hidden m-2 p-4">
        <img className="w-full h-40 object-cover rounded-lg" src={restaurant["imageUrl-src"]} alt="logo" />
        <h3 className="text-lg font-semibold mt-3 text-gray-800">{title}</h3>
        <p className="flex items-center text-sm mt-2 text-gray-700">
          <span className="inline-flex items-center justify-center w-6 h-6 bg-green-500 text-white rounded-full mr-2"><i className="bi bi-star-fill text-sm"></i></span>
          <span className="pl-1 text-md">{ratingAndTime}</span>
        </p>
        <p className="text-sm text-gray-500 mt-2">{category}</p>
        <p className="text-sm text-gray-500">{area}</p>
      </div>
    </Link>
  )
}

export default RestaurantCard;