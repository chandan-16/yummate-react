import { add } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenuItem = ({menuItem}) => {

  const dispatch = useDispatch();

  const { name, price, rating, description, } = menuItem;

  return (
    <div className="w-full px-4 sm:px-10 md:px-20 py-6 border-b">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <div className="pr-30">
        <img className="w-full sm:w-60 h-40 object-cover rounded-lg" src={menuItem["image-src"]} alt="List Items" />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h2 className="font-bold text-lg sm:text-xl text-gray-800 hover:underline cursor-pointer">{name}</h2>
          <p className="text-base text-gray-700 pt-1">₹{price}</p>
          <p className="text-sm text-gray-500 pt-2" >{description}</p>
          <p className="text-md mt-2"><i className="bi bi-star bg-green-600 text-white px-2 py-1 rounded-full mr-2"></i>{rating}</p>
          <button onClick={() => dispatch(add(menuItem))} className="mt-4 bg-white border border-green-600 text-green-600 px-5 py-2 rounded hover:bg-green-600 hover:text-white transition duration-200">ADD</button>
        </div>
      </div>
    </div>
  )
}

export default RestaurantMenuItem