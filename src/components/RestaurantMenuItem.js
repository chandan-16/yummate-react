const RestaurantMenuItem = ({restaurantList}) => {

  const { name, price, rating, description,  } = restaurantList;

  return (
    <div className="px-20 flex mt-5 pt-2 mx-auto pb-5">
      <div className="flex mx-auto bt-2 px-100 text-sm">
        <div className="pr-30">
        <img className="w-60 h-40" src={restaurantList["image-src"]} alt="List Items" />
        </div>
        <div className="w-[40rem] pt-0">
          <h2 className="font-bold text-lg text-black-600 hover:underline cursor-pointer">{name}</h2>
          <p className="text-lg font-normal pt-0">₹{price}</p>
          <p className="pt-2 text-gray-500 pb-2 text-sm" >{description}</p>
          <p className="text-md"><i className="bi bg-green-600 text-white rounded-2xl  bi-star px-2 py-1"></i> {rating}</p>
          <button className="border px-5 py-2 mt-4 hover:bg-green-600 hover:text-white rounded cursor-pointer mb-2">ADD</button>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default RestaurantMenuItem