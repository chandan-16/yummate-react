const RestaurantCard = ({restaurant}) => {

  return (
    <div className="w-50 h-90 mx-auto shadow m-5 p-2 hover:border-lg rounded text-left ml-5">
        <img src={restaurant["imageUrl-src"]} alt="logo" />
       <h3 className="font-bold text-2xl text-left">{restaurant.title}</h3>
       <h5 className="font-bold text-left">{restaurant.category}</h5> 
       <p className="font-bold text-left">{restaurant.ratingAndTime}</p>
    </div>
  )
}

export default RestaurantCard