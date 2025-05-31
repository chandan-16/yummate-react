import "../components/RestaurantCard.css";

const RestaurantCard = ({restaurant}) => {

  const { title, ratingAndTime, category, area } = restaurant;

  return (
      <div className="w-95 h-120 mx-auto m-2 p-5 text-left restaurantCard">
        <img className="w-95 h-70 resBanner" src={restaurant["imageUrl-src"]} alt="logo" />
        <h3 className="text-lg text-left py-2 title">{title}</h3>
        <p className="pt-1 flex">
          <span><i className="bi bi-star px-2 py-1 rating text-white"></i></span>
          <span className="pl-1 text-md"> {ratingAndTime}</span>
        </p>
        <p className="text-gray-400 text-left pt-2">{category}</p>
        <p className="text-gray-400 text-left pt-1">{area}</p>
      </div>
  )
}

export default RestaurantCard;