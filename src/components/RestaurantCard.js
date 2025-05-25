const RestaurantCard = ({resData}) => {

    const { name, image, rating,  deliveryTime, cuisines } = resData

  return (
    <div className="w-50 h-90 mx-auto shadow m-5 p-2 hover:border-lg rounded text-left">
        <img src={image} alt="logo" />
       <h3 className="font-bold text-2xl text-left">{name}</h3>
       <h5 className="font-bold text-left">{cuisines}</h5> 
       <p className="font-bold text-left">{rating}</p>
       <p>{deliveryTime}</p>
    </div>
  )
}

export default RestaurantCard