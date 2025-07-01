import { add } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenuItem = ({menuItem}) => {

  const dispatch = useDispatch();

  const { name, price, rating, description, } = menuItem;

  return (
    <div className="w-full max-w-md mx-auto px-4 py-6 border-b">
          <div className="flex flex-col items-center text-center gap-4">
        
            <img
              className="w-32 sm:w-40 md:w-44 h-28 sm:h-32 md:h-36 object-cover rounded-md"
              src={menuItem["image-src"]}
              alt={name}
            />

         
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">{name}</h2>

          
            <p className="text-base text-gray-700">₹{price}</p>

        
            <p className="text-sm text-gray-500 px-2 sm:px-6">
              {description}
            </p>

       
            <p className="flex items-center gap-2 mt-2 text-green-600 font-medium">
              <span className="inline-block bg-green-600 text-white rounded-full px-2 py-1 text-sm">
                <i className="bi bi-star-fill"></i>
              </span>
              {rating}
            </p>

       
            <button
              onClick={() => dispatch(add(menuItem))}
              className="mt-3 border border-green-600 text-green-600 px-5 py-2 rounded-md hover:bg-green-600 hover:text-white transition duration-200"
            >
              ADD
            </button>
          </div>
      </div>
  )
}

export default RestaurantMenuItem