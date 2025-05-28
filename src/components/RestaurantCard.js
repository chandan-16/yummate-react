import "../components/RestaurantCard.css";

const RestaurantCard = ({restaurant}) => {

  return (
      <div className="w-95 h-120 mx-auto shadow m-5 p-5 hover:border-lg rounded text-left ml-5 restaurantCard">
        <img className="w-95 h-80 resBanner" src={restaurant["imageUrl-src"]} alt="logo" />
        <h3 className="text-lg text-left py-2 title">{restaurant.title}</h3>
        <p className="pt-1 flex">
          <span><i className="bi bi-star px-2 py-1 rating text-white"></i></span>
          <span className="pl-1 text-md"> {restaurant.ratingAndTime}</span>
        </p>
        <p className="text-gray-400 text-left pt-2">{restaurant.category}</p>
      </div>
  )
}

export default RestaurantCard 