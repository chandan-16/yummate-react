import Header from "./Header"
import RestaurantCard from "./RestaurantCard";
import resList from './../utils/mockData';
import { useState } from "react";


const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="p-5">
        <Header />

        <div className="filter">
          <button onClick={() => setListOfRestaurants(listOfRestaurants.filter((restaurant) => restaurant = restaurant.rating > 4))} className="filter-btn px-5 py-3 bg-gray-500 rounded cursor-pointer text-white p-2">Top Rated Restaurants</button>
        </div>
        <div className="flex p-10 w-full p-4 flex-wrap justify-center">
          {
            listOfRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))
          }

        </div>

    </div>
  )
}

export default Body